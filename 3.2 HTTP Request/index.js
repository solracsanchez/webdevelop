import express from "express";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    // alert("Server Runing")
    // console.log(req.rawHeaders)
    res.send("<H1>Hello Word</H1>")
})

app.get("/about", (req, res) => {
    // alert("Server Runing")
    // console.log(req.rawHeaders)
    res.send("<H1>Sobre nós</H1>")
})

app.listen(port, () => {
    console.log("Server running on port " + port)
})