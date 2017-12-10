var send= require("./SendFacebook");

class ArmarList {

static enviar(x,callback){
	console.log(x);
var mensaje={
  "recipient":{
    "id":""
  }, 
  "message": {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "list",

        "top_element_style": "compact",
        "elements": [
        ]
      }
    }
  }
}


for(let i =0;x.length-1>i;i++){
	console.log(i);
	var elemento={
            "title": x[i].titulo_ed,
            "subtitle": x[i].descri_ed,
            "image_url": x[i].foto_ed,          
            "buttons": [
              {
                "title": "Ver Mas",
                "type": "web_url",
                "url": x[i].url_ed     
              }
            ]
          }

	mensaje.message.attachment.payload.elements.push(elemento);
  if(x.length-1==i){
  	console.log(mensaje);
  	return callback(mensaje);

  }

}






}

}

module.exports=ArmarList;