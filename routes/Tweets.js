import { GetTweets, InfoSave } from "../writeFile.js"

const route ="/tweets"
export const TweetRoute = (app) => {
app.get(route, (req, res) => {
    res.send(GetTweets())
})
app.post(route, (req, res)=>{
    const {username, tweet} = req.body
    const content = {
        username,
        tweet
    }
    
    InfoSave(content, "tweet")
    res.status(201).send("OK");
})}