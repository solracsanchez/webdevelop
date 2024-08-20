import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";


const app = express();
const port = 3000;
let band = "" // necessário declarar a variavel

//declarar middle antes de ser usado nas funções
app.use(bodyParser.urlencoded({extended: true})); 

//Custom Middleware
function bandGenerator (req, res, next){
  band = req.body["street"] + req.body["pet"];
  next(); // Não esquecer da função next para evitar looping eterno
}

app.use(bandGenerator); // declaração de uso do middleware

app.post("/submit", (req, res) => {
  res.send("<h1>Your bandname is:</h1>" + band) //Usando a variavel do middleware
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

