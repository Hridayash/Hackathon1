import express from "express"
import cors from "cors"
import dotenv from "dotenv"


const app = express()
app.use(cors())
dotenv.config()



app.get('/' , (req,res)=>{
    res.send("hello world ")
})


app.listen(3002, ()=>{
    console.log("server is running on port 3002")
})

console.log("hello")