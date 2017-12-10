
var request=require("request");
var bd= require("./../modelo/Consultas.js")
var consulta=(id,callback)=>{

const token="EAACKjt8ZBOfQBAHg8faHd3OiRXgQNSqOsFpiE174GJksMKOV2Hifnf0XLnzfSLKCX1230m3kyF7ilb7yZAds2ZCPcFQMRr9FxlwCMkYZAlAu4q6BjvLhTtie5Ics0Y2tONFZCZCGeGd25eZCUg6OL7DAwvZCc3CIGJHsbKQgUQUnUdZBBMAfCQw5NNFm7v4OIw3IZD";

console.log("entro fbgraph");
request({
	url:"https://graph.facebook.com/v2.6/"+id+"?access_token="+token+"",
	method:"GET"
},(error,response,body)=>{
    console.log(body)
var user=JSON.parse(body);



 
console.log(user.first_name);

bd.registrarUsuario(id,user.first_name,user.last_name,user.profile_pic);




});



}



module.exports.enviar=consulta;