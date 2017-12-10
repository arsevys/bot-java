var scraping = require("./scraping");
var planFile=require("./../modelo/Files.js");
var escribiendo=require("./../modelo/Escribiendo.js");
var send = require("./../modelo/SendFacebook");
var fbgraph=require("./fbgraph");
class Facebook{

static RecibiendoMensajes(req,res){
	


    var data=req.body.entry[0].messaging[0];
      if(data.hasOwnProperty('message')){

    var mensaje=data.message.text;
    console.log(data);
    const id=data.sender.id;
    escribiendo.enviar(id);
     fbgraph.enviar(id);
 
    scraping.buscar(id,mensaje);
}
    
    if(data.hasOwnProperty('postback')){
    console.log("Postback");
      console.log(data);
      let id=data.sender.id;
     var mensaje=data.postback.payload;
     scraping.extraerdata(mensaje,(err,x)=>{
      let men=planFile.convertir(id,"Resultado");
      send.enviar(men);
     });
    console.log(data)
   

    }


 
    res.sendStatus(200);
}


}

module.exports=Facebook;