import express from "express";
import cors from "cors";
import { TweetRoute } from "./routes/Tweets.js";
import { SignUpRoute } from "./routes/Sign-up.js";

const app = express()
app.use(cors())
app.use(express.json());


app.get("/", (req, res) => {
    res.send("olá")
})

SignUpRoute(app)
TweetRoute(app)

app.listen(5000, ()=>{
    console.log('Running on http://localhost:5000')
})