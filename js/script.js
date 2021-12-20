"use strict";
firebase.initializeApp({
  apiKey: "AIzaSyBCGkLiCCz0AmFkAgsJH8RX2p6j9Y9Jizc",
  authDomain: "ubicua-eb1c6.firebaseapp.com",
  projectId: "ubicua-eb1c6",
  storageBucket: "ubicua-eb1c6.appspot.com",
  messagingSenderId: "41113952430",
  appId: "1:41113952430:web:7b3a582e0d661a3bb74d3f",
  measurementId: "${config.measurementId}"
});


function guardar(){

var nombre = document.getElementById("dpnombre").value,
apellido = document.getElementById("dpapellido").value,
curp = document.getElementById("dpCURP").value,
edad = document.getElementById("dpedad").value,
peso = document.getElementById("dppeso").value,
estatura = document.getElementById("dpestatura").value,
grupo = document.getElementById("dpgrupo").value,
donante = document.getElementById("dpdonante").value,
alergias = document.getElementById("dpalergias").value,
desc = document.getElementById("dpdesc").value,
direc = document.getElementById("dpdirec").value,
cp = document.getElementById("dpcp").value,
tel1 = document.getElementById("dptel1").value,
tel2 = document.getElementById("dptel2").value;

var user=firebase.auth().currentUser;
var db = firebase.firestore();
var dbemail = user.email;
var coleccion = db.collection("Datosp");

coleccion.doc(dbemail).set({
    Nombre: nombre,
    Apellido: apellido,
    CURP: curp,
    Edad: edad,
    Peso: peso,
    Estatura: estatura,
    Grupo: grupo,
    Donante: donante,
    Alergias: alergias,
    Descripcion: desc,
    Direccion: direc,
    CodigoP: cp,
    Telefono1: tel1,
    Telefono2: tel2,
    Plan : "basico"
  })
  .then(() => {
          alert("Datos Guardados Correctamente");
    window.location.href="Perfil.html";
});
}


function guardarFm(){
        firebase.auth().onAuthStateChanged((user) => {
  if (user) {
        try{
var nombre = document.getElementById("fmnombre").value,
apellido = document.getElementById("fmapellido").value,
curp = document.getElementById("fmCURP").value,
edad = document.getElementById("fmedad").value,
peso = document.getElementById("fmpeso").value,
estatura = document.getElementById("fmestatura").value,
grupo = document.getElementById("fmgrupo").value,
donante = document.getElementById("fmdonante").value,
alergias = document.getElementById("fmalergias").value,
desc = document.getElementById("fmdesc").value;
var user=firebase.auth().currentUser;
var db = firebase.firestore();
var dbemail = user.email;


        var coleccion = db.collection("Datosp").doc(dbemail).collection("Familiares").doc(nombre+" "+apellido);

coleccion.set({
    Nombre: nombre,
    Apellido: apellido,
    CURP: curp,
    Edad: edad,
    Peso: peso,
    Estatura: estatura,
    Grupo: grupo,
    Donante: donante,
    Alergias: alergias,
    Descripcion: desc
  })
  .then(() => {
          alert("Datos del familiar guardados correctamente");
    window.location.href="familiares.html";
});
}catch(error){
        alert(error);
}

}
});

}



function cargarDatosPf(){
        
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
var db = firebase.firestore();
var dbemail = user.email;
var coleccion = db.collection("Datosp").doc(dbemail);
var nom,ap,crp,ed,ps,est,grp,dnt,alg,dsc,direc,cp,tel1,tel2;
try {
coleccion
.get().then((doc) => {
    if (doc.exists) {
            nom =(doc.data().Nombre);
            ap = (doc.data().Apellido);
            crp = (doc.data().CURP);
            ed = (doc.data().Edad);
            ps = (doc.data().Peso);
            est = (doc.data().Estatura);
            grp = (doc.data().Grupo);
            dnt = (doc.data().Donante);
            alg = (doc.data().Alergias);
            dsc = (doc.data().Descripcion);
            direc = (doc.data().Direccion);
            cp = (doc.data().CodigoP);
            tel1 = (doc.data().Telefono1);
            tel2 = (doc.data().Telefono2);
               pftitulo.innerHTML += "Hola "+nom+" "+ap;
        pfnombre.innerHTML += "Nombre: "+nom;
        pfapellido.innerHTML += "Apellido: "+ap;
        pfcurp.innerHTML += "CURP: "+crp;
        pfedad.innerHTML += "Edad: "+ed;
        pfpeso.innerHTML += "Peso: "+ps;
        pfestatura.innerHTML += "Estatura: "+est; 
        pfgrupo.innerHTML += "Grupo Sanguineo: "+grp;
        pfdonante.innerHTML += "Donante de organos: "+dnt;
        pfalergias.innerHTML += "Alergias: "+alg;
        pfdesc.innerHTML += "Descripción: "+dsc;
        pfdireccion.innerHTML += "Dirección: "+direc;
        pfcp.innerHTML += "Codigo postal: "+cp;
        pftel1.innerHTML += "Telefono 1: "+tel1;
        pftel2.innerHTML += "Telefono 2: "+tel2;

            try{
 var qrcode = new QRCode(document.getElementById("qr"));
        qrcode.makeCode(nom+"\n"+ap+"\n"+crp+"\n"+ed+"\n"+ps+"\n"+est+"\n"+grp+"\n"+dnt+"\n"+alg+"\n"+dsc+"\n"+direc+"\n"+cp+"\n"+tel1+"\n"+tel2+"\n");
       }catch(error){
               alert(error);
       }   
    }else{
        alert("Llena los datos personales primero");
        window.location.href ="DatosPersonales.html";
    }
})
.catch((error) => {
    console.log("Error getting document:", error);
});
} catch (error) {
  alert(error);

}

  } else {
    // User is signed out
    // ...
  }
});

}

function comprobar(){
        try{
var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
var validado = dpCURP.value.match(re);
var rcurp;	
    if (!validado){ rcurp= false;}
    else rcurp = true;
    if(
    dpnombre.value === "" ||
    dpapellido.value === "" ||
    dpCURP.value === "" ||
    dpedad.value === "" ||
    dppeso.value === "" ||
    dpestatura.value === "" ||
    dpgrupo.value === "" ||
    dpdonante.value === "" ||
    dpalergias.value === "" ||
    dpdesc.value === "" ||
    dptel1.value === ""){
      alert("Campos vacios");  
    }
    else{
        if(rcurp){
        guardar();    
        }else{
                alert("CURP ERRONEO");
        }
    }
        }catch(error){
                alert(error);
        }
  }

  function cargarDatosDp(){
        
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
var db = firebase.firestore();
var dbemail = user.email;
var coleccion = db.collection("Datosp").doc(dbemail);
var nom,ap,crp,ed,ps,est,grp,dnt,alg,dsc,direc,cp,tel1,tel2;
try {
coleccion
.get().then((doc) => {
    if (doc.exists) {
            nom =(doc.data().Nombre);
            ap = (doc.data().Apellido);
            crp = (doc.data().CURP);
            ed = (doc.data().Edad);
            ps = (doc.data().Peso);
            est = (doc.data().Estatura);
            grp = (doc.data().Grupo);
            dnt = (doc.data().Donante);
            alg = (doc.data().Alergias);
            dsc = (doc.data().Descripcion);
            direc = (doc.data().Direccion);
            cp = (doc.data().CodigoP);
            tel1 = (doc.data().Telefono1);
            tel2 =(doc.data().Telefono2);
             dpnombre.value = nom;
        dpapellido.value = ap;
        dpCURP.value =crp;
        dpedad.value = ed;
        dppeso.value = ps;
        dpestatura.value = est; 
        dpgrupo.value = grp;
        dpdonante.value = dnt;
        dpalergias.value = alg;
        dpdesc.value = dsc;
        dpcp.value =cp;
        dpdirec.value=direc;
        dptel1.value=tel1;
        dptel2.value=tel2;
    }
})
.catch((error) => {
    console.log("Error getting document:", error);
});
} catch (error) {
  alert(error);

}

  } else {
    // User is signed out
    // ...
  }
});

}

function cargarDatosF(){
        
  try {
  firebase.auth().onAuthStateChanged((user) => {

var db = firebase.firestore();
var dbemail = user.email;     
var coleccion = db.collection("Usuario").doc(dbemail);
var tipo;
 if (user) {  
  var db = firebase.firestore();
  var coleccion = db.collection("Datosp").doc(dbemail).collection("Familiares");
coleccion
.get().then((querySnapshot) => {
  tabla.innerHTML = '';
        querySnapshot.forEach((doc) => {    
          var datos = doc.data();
            tabla.innerHTML += `
            <tr>
       <td id="cont">${datos.Nombre}</td>
       <td id="cont">${datos.Apellido}</td>
       <td id="cont">${datos.CURP}</td>
        <td>
         <button  id="botonesc" onclick="Consultar('${datos.Nombre}','${datos.Apellido}')">Consultar</button>
       </td>
    </tr>    `
        });
    }).catch((error) => {
    alert(error);
});
    

}
  
}); 
}catch (error) {
  alert(error);
}

}

function Consultar(nombre,apellido){
try {
        cfcp.innerHTML ="";
        cfdireccion.innerHTML="";
        cftel1.innerHTML="";
        cftel2.innerHTML=""; 
  cfnombre.innerHTML ="";
        cfapellido.innerHTML ="";
        cfcurp.innerHTML ="";
        cfedad.innerHTML ="";
        cfpeso.innerHTML ="";
        cfestatura.innerHTML =""; 
        cfgrupo.innerHTML ="";
        cfdonante.innerHTML ="";
        cfalergias.innerHTML ="";
        cfdesc.innerHTML ="";
        qr.innerHTML="";
firebase.auth().onAuthStateChanged((user) => {
  if (user) {

var db = firebase.firestore();
var dbemail = user.email;
var coleccion = db.collection("Datosp").doc(dbemail);
var nom,ap,crp,ed,ps,est,grp,dnt,alg,dsc,direc,cp,tel1,tel2;
coleccion
.get().then((doc) => {
      
    if (doc.exists) {
            direc = (doc.data().Direccion);
            cp = (doc.data().CodigoP);
            tel1 = (doc.data().Telefono1);
            tel2 =(doc.data().Telefono2);
    
    } else {
          
        alert("No such document!");
    }
}).then(()=>{
        cfcp.innerHTML +="Código Postal: "+ cp;
        cfdireccion.innerHTML +="Direccion: "+ direc;
        cftel1.innerHTML +="Telefono 1: "+ tel1;
        cftel2.innerHTML +="Telefono2: "+ tel2;        
}).then(()=>{
      coleccion.collection("Familiares").doc(nombre+" "+apellido).get().then((doc) => {
    if (doc.exists) {
            crp = (doc.data().CURP);
            ed = (doc.data().Edad);
            ps = (doc.data().Peso);
            est = (doc.data().Estatura);
            grp = (doc.data().Grupo);
            dnt = (doc.data().Donante);
            alg = (doc.data().Alergias);
            dsc = (doc.data().Descripcion); 
            
    }  
}).then(()=>{
        cfnombre.innerHTML +="Nombre: "+ nombre;
        cfapellido.innerHTML +="Apellido: "+ apellido;
        cfcurp.innerHTML +="CURP: "+ crp;
        cfedad.innerHTML +="Edad: "+ ed;
        cfpeso.innerHTML +="Peso: "+ ps;
        cfestatura.innerHTML +="Estatura: "+ est; 
        cfgrupo.innerHTML +="Grupo Sanguineo: "+ grp;
        cfdonante.innerHTML +="Donante de Organos: "+ dnt;
        cfalergias.innerHTML +="Alergias: "+ alg;
        cfdesc.innerHTML +="Descripcion: "+ dsc;
}).then(()=>{
              try{
 var qrcode = new QRCode(document.getElementById("qr"));
        qrcode.makeCode(nombre+"\n"+apellido+"\n"+crp+"\n"+ed+"\n"+ps+"\n"+est+"\n"+grp+"\n"+dnt+"\n"+alg+"\n"+dsc+"\n"+direc+"\n"+cp+"\n"+tel1+"\n"+tel2+"\n");
       }catch(error){
               alert(error);
       }   
})
.catch((error) => {
    console.log("Error getting document:", error);
});
});
  } else {
    // User is signed out
    // ...
  }
});
} catch (error) {
  alert(error);

}
}