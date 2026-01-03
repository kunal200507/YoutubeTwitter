import {v2 as cloudinary} from "cloudinary";
import {unlink} from 'node:fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function cloudinaryUpload(filePath){
  try {
    if(!filePath) return null

    const responce = await cloudinary.uploader.upload(filePath,{resource_type:"auto"});
    console.log(`Cloudinary url: ${responce.url}`)
    
    unlink(filePath,(err)=>{
      if(err) throw err;
      console.log(`${filePath} is deleted after upload`)
    })
    
    return responce.url;
  
  }catch (error) {
    
    unlink(filePath,(err)=>{
      if(err) throw err;
      console.log(`${filePath} is deleted but not uploaded in cloudinary`);
    })
    console.log(`CLOUDINARY ERROR!!! ${error}`);
    
    return null;
  }
}

export default cloudinaryUpload