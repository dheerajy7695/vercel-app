const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

app.get("/home", (req, res) => {
    res.send("Welcome to your home page!");
});

app.get("/development", (req, res) => {
    res.send("Welcome to your development branch!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


module.exports = app;