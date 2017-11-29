var request=require("request");
const token="EAACKjt8ZBOfQBAHg8faHd3OiRXgQNSqOsFpiE174GJksMKOV2Hifnf0XLnzfSLKCX1230m3kyF7ilb7yZAds2ZCPcFQMRr9FxlwCMkYZAlAu4q6BjvLhTtie5Ics0Y2tONFZCZCGeGd25eZCUg6OL7DAwvZCc3CIGJHsbKQgUQUnUdZBBMAfCQw5NNFm7v4OIw3IZD";

class SendFacebook {

	static enviar(mensaje){
		request({
			url:"https://graph.facebook.com/v2.6/me/messages?access_token="+token,
			json:true,
			body:mensaje,
			timeout:60000,
			method:'POST',
			headers:{
				"Content-Type":"application/json"
			}
		},function(e,res,body){
			if(e){console.log("error");return;}
			console.log("se envio");
		})
	}

}

module.exports=SendFacebook;
