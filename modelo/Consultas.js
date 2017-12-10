var mysql=require("mysql");
var pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'andy',
	database:'fbcode'
})
class Consultas {

static obtenerEventos(x,callback){
   var self=[];
	pool.getConnection(function(err, connection){
  // Use the connection
  connection.query("SELECT * FROM eventosxdetalle where id_ev="+x, (error, results, fields)=> {
    // And done with the connection.

    console.log(results);
    self=results;
    connection.release();
    callback(results);
    // Handle error after the release.
   // if (error) throw error;
 
    // Don't use the connection here, it has been returned to the pool.
  });
});
	 
}
static obtenerCard(x,callback){
   var self=[];
	pool.getConnection(function(err, connection){
  // Use the connection
  connection.query("call listarproductosdetalle(?)",[x],(error, results, fields)=> {
    // And done with the connection.

    console.log(results);
    self=results;
    connection.release();
    callback(results[0]);
    // Handle error after the release.
   // if (error) throw error;
 
    // Don't use the connection here, it has been returned to the pool.
  });
});
	 
}
static obtenerUsuarios(callback){
   var self=[];
	pool.getConnection(function(err, connection){
  // Use the connection
  connection.query("SELECT * FROM usuarios", (error, results, fields)=> {
    // And done with the connection.

    self=results;
    connection.release();
    callback(results);
    // Handle error after the release.
   // if (error) throw error;
 
    // Don't use the connection here, it has been returned to the pool.
  });
});
	 
}
static obtenerMensaje(x,callback){
   var self=[];
	pool.getConnection(function(err, connection){
  // Use the connection
  connection.query("SELECT * FROM mensaje where id_men=?",[x], (error, results, fields)=> {
    // And done with the connection.

    self=results;
    connection.release();
    let m={
	"recipient":{
    "id":""
   },
   "message":{text:results[0].men_men}
}
    callback(m);
    // Handle error after the release.
   // if (error) throw error;
 
    // Don't use the connection here, it has been returned to the pool.
  });
});
	 
}
static registrarUsuario(id,nom,ape,foto){
	pool.getConnection(function(err,connection){
		connection.query("call registrarUsuario(?,?,?,?)",[id,nom,ape,foto],(e,res,fiel)=>{
         connection.release();
		})
	})
}

}

module.exports=Consultas;