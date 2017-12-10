'use strict';
const express=require('express');
var app=express();
var puerto = process.env.PORT||3000;
var bodyparser=require("body-parser");
var database=require("./modelo/Consultas")
var send=require("./modelo/ArmarList")
var card=require("./modelo/CardM")
var pe=require("./controlador/PrepararEnvio");
var operaciones=require("./controlador/Facebook.js");
// app.use();

app.use(bodyparser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(__dirname+"/texto/"));

app.get("/webhook",(req,res)=>{

 if (req.query['hub.mode']  &&
      req.query['hub.verify_token'] === "botjava") {
        console.log("Enlazado con facebook");
        res.status(200).send(req.query['hub.challenge']);
  } else {
        console.error("Failed validation. Make sure the validation tokens match.");
        res.sendStatus(403);          
         }  
});

app.get("/boom",(req,res)=>{
console.log("Peticion",req.query);
database.obtenerEventos(req.query.ide,(data)=>{
send.enviar(data,(y)=>{
	pe.mensaje(y);
});


});
res.status(200).send("Booommmm")
})


app.get("/mensajeSolo",(req,res)=>{
database.obtenerMensaje(req.query.ide,(data)=>{

	pe.mensaje(data);
})

})
app.get("/card",(req,res)=>{
console.log(req.query)
database.obtenerCard(req.query.ide,(data)=>{
card.enviar(data,(y)=>{
	pe.mensaje(y);
});


});
res.status(200).send("Booommmm")
})

app.post("/webhook",operaciones.RecibiendoMensajes);

app.listen(puerto,function(){
console.log("El servidor se esta ejecutando en el puerto ->" + puerto)

});