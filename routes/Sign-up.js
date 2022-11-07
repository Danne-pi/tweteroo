import { InfoSave } from "../scripts/WriteFile.js";

export const SignUpRoute = (app) => {
    app.post("/sign-up", (req, res) => {
        const {username, avatar} = req.body

        if (!username || !avatar) {
            res.status(400).send("Todos os campos são obrigatórios");
            return
        }

        const content = {
            username,
            avatar
        }
        InfoSave(content, "user")
        res.status(201).send("OK");
    })
}