var plant;
// Recupera la plantilla que esta en la direccion 'templates/track-temp.html' y se guarda dentro de la 
// variable plant
$.get('templates/track-temp.html', function(data){
	plant=data;
});
//Evento click del boton
$("button").click(function(){
	//Con ajax recuperamos los datos de la pagina en formato json:
	//primero le pasamos la url, luego le pasamos el tipo de peticion y por ultimo el tipo de dato de 
	//respuesta
	$.ajax({
		url:'https://3a8i3.github.io/',// la url
		type:'GET',//tipo de peticion
		dataType:'json',//tipo de respuesta
	})

	.done(function(datos){//Esta funion se ejecuta cuando se obtiene una respuesta
			cargarDatos(datos)
	})

	.fail(function(){//Esta funcion se ejecuta cuando alo falla
		console.log("error");
	});

})

function cargarDatos(arg) {
var lista=arg;

	for(var i= lista.length - 1; i >= 0; i--){
		var m= lista[i];
		var p= $(plant);
		p.find(".musica").text(m.musica);
		p.find(".artista").text(m.artista);
		p.find(".anho").text(m.anho);
		p.find(".portada").attr("src", m.portada);
		p.find(".genero").text(m.genero);
		p.find(".audio").attr("src", m.audio);
		$('section').append(p);
	}
}