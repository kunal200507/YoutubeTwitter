import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function dbConnection(){
    try {
        const dbConnectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`DB CONNECTED SUCCESFULLY: ${dbConnectionInstance.connection.host}`)
    } catch (error) {
        console.log(`DB CONNECTION FAILED: ${error}`)
        process.exit('1');
    }
}

export default dbConnection