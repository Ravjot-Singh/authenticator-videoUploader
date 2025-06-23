import 'dotenv/config'; 
import mongoose, { connect } from "mongoose";
import {DB_NAME} from './constants.js'
import { app } from './app.js';


;(async ()=>{
    try{

       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("error")
        throw error
       })

       app.listen(process.env.PORT  || 8000, ()=>{
        console.log(`app is listening on port ${process.env.PORT}`)
       })

    } catch(error){
        console.error("ERROR: ", error)
        throw error
    }
})()

