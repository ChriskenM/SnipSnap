const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({ "users": ["Usersone", "Userstwo", "Users3", "user4"] })
})

app.listen(5000, () => { console.log("Server is running on port 5000")})