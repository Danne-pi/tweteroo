import express from "express";
import cors from "cors";
import { TweetRoute } from "./routes/Tweets.js";
import { SignUpRoute } from "./routes/Sign-up.js";
import { CheckFirsLoad } from "./scripts/WriteFile.js";


CheckFirsLoad()

const port = 5000
const app = express()
app.use(cors())
app.use(express.json());

SignUpRoute(app)
TweetRoute(app)

app.listen(port, ()=>{
    console.log('Running on http://localhost:'+port)
})