/*

Crea una aplicación web que a través de un formulario me permita
recoger los datos del nombre, edad y dni. Cuando pulsemos el botón
de insertar usuario, automaticamente se creará usando la herencia por prototipos
un usuario de tipo UsuarioLiteral y guardará en un array dichos objetos
almacenandolos en el LocalStorage a través de la clave datos usuarios.

*/

// -- Imports -- //
import { usuarioLiteral } from "./assets/modules.js";

// -- Variables -- //


// -- Functions -- //
function handlerInsertarUsuario(e){
    e.preventDefault();
    // const form = document.getElementById("formUsuario");
    const usernameFrm = document.getElementById("username").value;
    const edadFrm = document.getElementById("edad").value;
    const dniFrm = document.getElementById("dni").value;

    let usuario = Object.create(usuarioLiteral);
    usuario.nombre = usernameFrm; // sorry for using username
    usuario.edad = edadFrm;
    usuario.dni = dniFrm;
    document.getElementById("copiaPreview").innerHTML = usuario.mostrarInfo();
    console.table(usuario);
}
function init(){
    const botonInsertar = document.getElementById("insertarUsuario");
    botonInsertar.addEventListener("click", handlerInsertarUsuario);
}

// -- Incio -- //
document.addEventListener("DOMContentLoaded", init);