import express, { urlencoded } from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express()

//app.use()//use for middlewares and configuration
app.use(cors(
    {
        origin:process.env.CORS,
    }
))

app.use(express.json({limit:"16kb"}));
app.use(cookieParser());
app.use(urlencoded({limit:"16kb",extended:true}));
app.use(express.static("public"));

//router starts here
import userRouter from './routes/user.routes.js'
//routes declaration
app.use('/api/v1/user',userRouter)

export default app