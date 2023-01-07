import express, { request } from "express";

const apiRouter:express.Router=express.Router()


// Logic
apiRouter.get('/',(request:express.Request,response:express.Response)=>{
    response.status(200).json({
        msg:'Welcome to API Router'
    })
})

export default apiRouter