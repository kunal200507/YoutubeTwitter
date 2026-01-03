import asyncHandler from '../utils/asyncHandler.js'
import apiError from '../utils/apiError.js'
//user register steps
//1>data encode karenge->extract from json
//2>validation
//3>check user already exists:username/email
//4>check for images check for avatar
//5>upload them to cloudinary,avatar
//6>create userObject - create entry in db
//7>remove password and refresh token field
//8>check for user creation
//9>return respoce 
const userRegister = asyncHandler(async (req,res)=>{
    // const {fullName,username,email,password}=req.body
    if(req.body===undefined) throw new apiError(400,"form body is empty");
    console.log(req.body)

    // if(fullName===""){
    //     throw new apiError(400,"fullName is empty")
    // }
    // if(username===""){
    //     throw new apiError(400,"username is empty")
    // }
    // if(email===""){
    //     throw new apiError(400,"email is empty")
    // }
    // if(password===""){
    //     throw new apiError(400,"password is empty")
    // }

    // [fullName,username,email,password].map((field)=>{
    //     if(field==="") throw new apiError(400,"field is missing");
    // })
})

export {
    userRegister,
}