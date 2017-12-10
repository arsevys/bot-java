var send = require("./SendFacebook");
class CardM {

static enviar(x,callback){
 var c={
  "recipient":{
    "id":""
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
         
        ]
      }
    }
  }
};  

   for(let i=0;x.length>i;i++){
    console.log(777777777,x[i].descri_pro)
   var unidad=  {
            "title":x[i].nom_pro +"  S/."+x[i].precio_pro,
            "image_url":x[i].foto_pro,
            "subtitle":x[i].descri_pro,
      
            "buttons":[
              {
                "type":"web_url",
                "title":"Ver",
                "url":x[i].url_pro
              }              
            ]      
          }

c.message.attachment.payload.elements.push(unidad);
    if(x.length-1==i){
      console.log(JSON.stringify(c));
      return callback(c);
    }

   }


}



}

module.exports=CardM;