$(document).ready(function(){

function listar(){
 $.ajax({
	url:"/WebBot/Usuarios?ac=listar",
	method:"GET",
	success:function(data){
		console.log(data);
		$("#dataPro").datagrid({
			data:data
		})
		actualisarEventos();
	  }
   })
}

 listar();


function actualisarEventos(){

    $('.eliminarProducto').unbind();
	$('.verProducto').unbind();s
	$('.editarProducto').unbind();
	$('.eliminarProducto').click(function(){
		   $.messager.confirm({
		     title:'Eliminar',
		     icon:'error',
		     msg:"Estas seguro de eliminar este usuario ?",
		     fn:function(r){
		     	if(r){
		     		var o=$("#dataPro").datagrid('getSelected');
		     eliminarU(o.id);
		     	}
		     
		     }

		   });
    });

	$('.verProducto').click(function(){
     setTimeout(function(){verUsuario($(this))},100);
       });
    $('.editarProducto').click(function(){   	
     setTimeout(function(){editarUsuario($(this))},100);
       });	
}


function verUsuario(x){

	 var p=$("#dataPro").datagrid('getSelected');
	 rellenar(p);
	 bloqueartodo(true);
	 $("#dialpro").dialog('open');

}


function editarUsuario(x){

	console.log(x);
	var p=$("#dataPro").datagrid('getSelected');
    console.log(p);
    rellenar(p);
    bloqueartodo(false);
	$(".id")[0].disabled=true;
   	$(".idfb")[0].disabled=true;
   	$("#dialpro").dialog('open');  


}


function rellenar(x){

	$(".id").val(x.id);
   	$(".idfb").val(x.idfb);
    $(".nombre").val(x.nombre);
	$(".apellido").val(x.apellido);
	 //$(".img").attr("src",x.foto);
}


function bloqueartodo(x){
	
	$(".id")[0].disabled=x;
   	$(".idfb")[0].disabled=x;
    $(".nombre")[0].disabled=x;
	$(".apellido")[0].disabled=x;
	
}



function eliminarU(x){
	$.ajax({
	url:"/WebBot/Usuarios?ac=eliminar&id="+x,
	method:"GET",
	success:function(data){
		listar();
	}
})
}

function actualisarU(x){

	let nom=$(".nombre").val();
	 let apellido=$(".apellido").val();
	$.ajax({
	url:`/WebBot/Usuarios?ac=actualisa&id=${x.id}&nombre=${nom}&apellido=${apellido}`,
	method:"GET",
	success:function(data){
		listar();
		$("#dialpro").dialog('close'); 
	}
})
}
$(".actUsu").click(function(){
	console.log("ella durmio")
	  var p=$("#dataPro").datagrid('getSelected');
	actualisarU(p);
	 
})


$("#dialpro").dialog('close');
})



