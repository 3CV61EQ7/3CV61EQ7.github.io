var email = document.getElementById("correo"),
    pass = document.getElementById("contra");

function registrar(em,pas){
  firebase.auth().createUserWithEmailAndPassword(em,pas)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert("Registro Exitoso");
    window.location.href = "inicio_sesion.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode);
    alert(errorMessage);
    // ..
  });
}
  function validarEmail(valor) {
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
   return true;
  } else {
   alert("La dirección de email es incorrecta!.");
   return false;
  }
}
function validarContenido(em,pas){
  if(em === '' && pas === ''){
    alert("por favor llena los campos");
    return false;
  }
  else return true;
}

function validar(obj){
	var  forma = document.getElementById("formulario");
	if(!validarContenido(email.value,pass.value) || !validarEmail(email.value)){  
}else {
 if(forma.cbox1.checked==true){
	registrar(email.value,pass.value);
        
	}else{
		window.alert("Por favor, antes de continuar revisa nuestros terminos y condiciones.");
	}
}
  }