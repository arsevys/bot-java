

var bd= require("./../modelo/Consultas");
var sendFacebook=require("./../modelo/SendFacebook");
class PrepararEnvio {

static mensaje(x){

bd.obtenerUsuarios((c)=>{

   for(let i=0;c.length>i;i++){
   	x.recipient.id=c[i].idfb_usu;

   	sendFacebook.enviar(x);
   }
    
})


}

}

module.exports=PrepararEnvio;