var send = require("./SendFacebook");
class Card {

static enviar(id,x){
 var c={
  "recipient":{
    "id":id
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
   var unidad=  {
            "title":x[i].title,
            "image_url":"https://fthmb.tqn.com/GnIx7E7LRF4dZNCviyzOWOI7ATw=/735x0/JavaScript-58acbb8a3df78c345bad32c2.jpg",
            "subtitle":x[i].description,
      
            "buttons":[
              {
                "type":"postback",
                "title":"Eligir",
                "payload":x[i].url
              }              
            ]      
          }

c.message.attachment.payload.elements.push(unidad);


   }


send.enviar(c);
}



}

module.exports=Card;