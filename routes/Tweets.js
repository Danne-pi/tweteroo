import { GetTweets, InfoSave } from "../scripts/WriteFile.js"

const route ="/tweets"
export const TweetRoute = (app) => {
app.get(route, (req, res) => {
    res.send(GetTweets())
})
app.post(route, (req, res)=>{
    const {username, tweet} = req.body

    if (!username || !tweet) {
        res.status(400).send("Todos os campos são obrigatórios");
        return
      }

    const content = {
        username,
        tweet
    }
    
    InfoSave(content, "tweet")
    res.status(201).send("OK");
})}