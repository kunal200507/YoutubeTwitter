
// const asyncHandeler=(func)=>{      function return a function of promise which resolves when the passed function got run without error and catches error if any.
//   return (req,res,next)=>{
//     Promise.resolve(func(req,res,next)).catch((error)=>next(error))
//   } 
// }

//try catch methode of same thing

const asyncHandeler = (func)=>async(req,res,next)=>{
    try {
        await func(req,res,next);
    } catch (error) {
        res.status(error.code||500).json({
            success:false,
            message:error.message
        })
    }
}

export default asyncHandeler
