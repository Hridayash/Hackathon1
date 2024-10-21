import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import userRouter from "./routes/userController.js"


const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())



app.use('/api', userRouter);


app.listen(3002, ()=>{
    console.log("server is running on port 3002")
})