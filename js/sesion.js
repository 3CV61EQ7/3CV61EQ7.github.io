
function inicio(){
var em = document.getElementById("emaillog").value,
pas=document.getElementById("passlog").value;
firebase.auth().signInWithEmailAndPassword(em, pas)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert("inicio de sesion exitoso");
    window.location.href = "DatosPersonales.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode);
    alert(errorMessage);
    alert("error");
  });
  
}

function iniciog(){
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    window.location.href = "DatosPersonales.html";
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    alert(errorCode,errorMessage,email,credential);
    // ...
  });

}

function cerrar(){
  firebase.auth().signOut().then(() => {
  alert("Sesion cerrada");
 
}).catch((error) => {
  // An error happened.
  alert(error);
});
}

function observar(){
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    var email = user.email;
    
  } else {
     window.location.href = "inicio_sesion.html";
  }
});
}
