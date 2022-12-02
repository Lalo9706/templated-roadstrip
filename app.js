//console.log("Hasta aqui todo bien");
const express = require("express");
const app = express();
const port = 8080;

//servir como contenido estatico
app.use(express.static('files'));

//Definición de pagina 404
app.get("*",(req,res)=>{
    //res.send("404 page not found");
    res.sendFile(__dirname+'/files/404.html');
});


app.listen(port, ()=>{
    console.log("App listening on port: "+port);
});