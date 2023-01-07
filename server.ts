import express, { response } from "express";
import cors from "cors";
import dotenv from 'dotenv';
import mongoose, { Error, Mongoose } from "mongoose";
import apiRouter from "./router/apiRouter";

const app:express.Application=express()

// Configuration
app.use(cors()) 
dotenv.config({path: './.env'})
app.use(express.json()); //

let hostName:string|undefined=process.env.HOST_NAME
let port:number | undefined= Number(process.env.PORT)
let mongoDBURL:string|undefined=process.env.MONGODB_URL

// MongoDB Connection
if(mongoDBURL){
    mongoose.connect(mongoDBURL).then((response:Mongoose)=>{
        console.log("Connected to MongodB Successfully");
        
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
        
    })
}

app.get('/',(request: express.Request,response: express.Response)=>{
    response.status(200).json({
        msg:'Welcome to Express Server'
    })
} )

// Router Configuration
app.use('/api/v1',apiRouter)

if(port != undefined && hostName!=undefined){
    app.listen(port,hostName,()=>{
        console.log(`Express Server Started at : http://${hostName}:${port}`);        
        
    })
}

