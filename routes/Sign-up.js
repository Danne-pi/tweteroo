import { InfoSave } from "../writeFile.js"


export const SignUpRoute = (app) => {
    app.post("/sign-up", (req, res) => {
        const {username, avatar} = req.body
        const content = {
            username,
            avatar
        }
        InfoSave(content, "user")
        res.status(201).send("OK");
    })
}