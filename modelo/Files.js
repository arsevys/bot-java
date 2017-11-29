

class Files {
  
   static convertir(id,nom){

   return {
  "recipient":{
    "id":id
  },
  "message":{
    "attachment":{
      "type":"file", 
      "payload":{
        "url":"https://cdaa3dee.ngrok.io/"+encodeURIComponent(nom)+".txt" 
        
      }
    }
  }
};
   }

 


}


module.exports=Files;