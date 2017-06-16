function init(){
	var button = document.getElementById("botonGuardar");
	button.addEventListener("click", guardarDatos);
	guardarDatos();
		
}
function guardarDatos(){
	var nombre = document.getElementById("clave").value;
	var mensaje = document.getElementById("valor").value;
	localStorage.setItem(nombre, mensaje);
	//recuperarDatos();
	var contenedor = document.getElementById("datos");
	contenedor.innerHTML = "";
	for(var i = 0; i < localStorage.length; i++){
		var kei = localStorage.key(i);
		var valuee = localStorage.getItem(kei);

		var caja = document.createElement("div");
			caja.setAttribute("class", "cajas");
		var usuario = document.createElement("h1");
		var comentario = document.createElement("p");
		var h1 = document.createTextNode(kei);
		var p = document.createTextNode(valuee);

		usuario.appendChild(h1);
		comentario.appendChild(p);

		caja.appendChild(usuario);
		caja.appendChild(comentario);

		contenedor.appendChild(caja);

	}
	
}
function clean(){
	var button = document.getElementById("botonLimpiar");
	button.addEventListener("click", cleanData);
}

function cleanData(){
	document.getElementById("datos").innerHTML = "";
	//borrarTodo();
}    
function borrarTodo(){
	localStorage.clear();
	recoverData();
}

clean();
init();