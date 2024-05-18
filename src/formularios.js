
document.getElementById("btn-registrarse").addEventListener("click", registro);
document.getElementById("btn-Recuperar-contraseña").addEventListener("click", recuperar);
document.getElementById("btn-iniciar-sesion").addEventListener("click", IniciarSesion);
document.getElementById("enviar").addEventListener("click",registro)
document.getElementById("enviar").addEventListener("click",recuperar)
document.getElementById("enviar").addEventListener("click",IniciarSesion)

/* variables */
var contenedor_login_registro = document.querySelector(".contenedor-login-registro");
var formulario_login = document.querySelector(".formulario-login");
var formulario_registro = document.querySelector(".formulario-registro");
var caja_trasera_login = document.querySelector(".caja-trasera-login");
var caja_trasera_registro = document.querySelector(".caja-trasera-registro");
var formulario_recuperar_contraseña = document.querySelector(".formulario-recuperar-contraseña");


function registro(){
    formulario_registro.style.display = "block";
    contenedor_login_registro.style.left ="410px";
    formulario_login.style.display ="none";
    caja_trasera_registro.style.opacity = "0";
    caja_trasera_login.style.opacity ="1";
}
function IniciarSesion(){
    formulario_registro.style.display = "none";
    formulario_recuperar_contraseña.style.display = "none"
    contenedor_login_registro.style.left ="10px";
    formulario_login.style.display ="block";
    caja_trasera_registro.style.opacity = "1";
    caja_trasera_login.style.opacity ="0";
}
function recuperar(){
    formulario_recuperar_contraseña.style.display = "block";
    formulario_registro.style.display = "none";
    formulario_login.style.display ="none";
    contenedor_login_registro.style.left ="10px";
    caja_trasera_registro.style.opacity = "1";
    caja_trasera_login.style.opacity ="0";
}