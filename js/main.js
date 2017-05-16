function validateForm(){

	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var email = document.getElementById('input-email').value;
	var contrasena = document.getElementById('input-password').value;
	var bici = document.getElementById('bici').value;

function nombre(){
		if(nombre === "" || nombre.length === 0){
			alert("Debe ingresar su nombre");
		}else if(nombre.charAt(0) != nombre.charAt(0).toUpperCase()){
			alert("El nombre debe comenzar con mayúscula");
		}

function apellido(){
		if(apellido === "" || apellido.length === 0){
			alert("Debe ingresar su apellido");
		}else if(apellido.charAt(0) != apellido.charAt(0).toUpperCase()){
			alert("El apellido debe comenzar con mayúscula");
		}
}
	
function contrasena(){
		if(contrasena === "" || contrasena.length === 0){
			alert("Debe ingresar contraseña");
		}else if(contrasena === "123456" || contrasena === "password" || contrasena === "098754"){
			alert("La contraseña debe ser distinta a 123456, password o 098754");
		}else if(contrasena.length < 6){
			alert("La contraseña debe tener al menos 6 caracteres");
		}
}




}
}	