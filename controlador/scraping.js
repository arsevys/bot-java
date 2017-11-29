var fs=require("fs");
var cheerio=require("cheerio");
var scrapemdn= require("scrape-mdn");
var request=require("request");
var card=require("./../modelo/Card");
class scraping {

static buscar(i,x){

 scrapemdn.search(x).then((results) => {
  var {url, title, description} = results[0];
   console.log(results);
 card.enviar(i,results) 
return;
 })

}

static extraerdata(x,callback){
   request(x,(err,res,reshtml)=>{
   // console.log(reshtml);
     var $=cheerio.load(reshtml);
     // console.log($("#wikiArticle").text());
   fs.writeFile(__dirname + '/../texto/resultado.txt', $("#wikiArticle").text(),'utf8',function(err){ 

     return callback(null,x);
   });
  })
}

}

module.exports=scraping;