'use strict';
const express=require('express');
var app=express();
var puerto = process.env.PORT||3000;
var bodyparser=require("body-parser");
// app.use();

app.use(bodyparser.json());


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



app.post("/webhook",(req,res)=>{
  let data = req.body;
console.log(data);
})

app.listen(puerto,function(){
console.log("El servidor se esta ejecutando en el puerto ->" + puerto)

});