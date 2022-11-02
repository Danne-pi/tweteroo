import express from "express";
import cors from "cors";

const app = express()
app.use(cors())



app.get("/", (req, res)=>{



    res.send("teste 2")
})



app.listen(4000, ()=>{
    console.log('Running on http://localhost:4000')
})