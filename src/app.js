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
app.use(express.cookieParser());
app.use(urlencoded({limit:"16kb",extended:true}));
app.use(express.static("public"));

export default app