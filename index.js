var scrapeMdn= require("scrape-mdn");
var fs=require("fs");
const rq=require("request");
var cheerio=require("cheerio");
// fs.createStream((err,cliente,done)=>{

 

// });

const url="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math";
scrapeMdn.search('let').then((results) => {
  var {url, title, description} = results[0];
  console.log(url);
  rq("https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let",(err,res,reshtml)=>{
// console.log(reshtml);
var $=cheerio.load(reshtml);
// console.log($("#wikiArticle").text());
   fs.writeFile(__dirname + '/ok.html', $("#wikiArticle").text(), function(err){
      

    })
});

});

