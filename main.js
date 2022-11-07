import express from "express";
import cors from "cors";
import { GetTweets, InfoSave } from './writeFile.js'

const app = express()
app.use(cors())
app.use(express.json());


app.get("/", (req, res) => {
    res.send("olá")
})

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body
    const content = {
        username,
        avatar
    }
    // InfoSave(content, "user")
    res.status(201).send("Criado com sucesso");
})

app.get("/tweets", (req, res) => {
    res.send(GetTweets())
})
app.post("/tweets", (req, res)=>{
    const {username, tweet} = req.body
    const content = {
        username,
        tweet
    }
    
    InfoSave(content, "tweet")
    res.status(201).send("Criado com sucesso");
})

app.listen(5000, ()=>{
    console.log('Running on http://localhost:5000')
})