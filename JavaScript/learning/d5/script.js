function crearMd(str_arg_content) 
{
  var archivo = new Blob([str_arg_content], { type: "text/markdown" });
  var url = URL.createObjectURL(archivo);
  var enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = "texto.md";
  enlace.click();
}
function guardarTexto() 
{
  var contenido = document.getElementById("editor").innerHTML;
  console.log("Función llamada");
  crearMd(contenido);
}

// Evento click en el botón "Guardar"
document.getElementById("guardar").addEventListener("click", guardarTexto);


// Modo oscuro y autodetección del sistema
function toggleColorScheme() {
  document.body.classList.toggle('dark-mode');
  // Cambia el emoji del botón de ☾ a ☀
  var button = document.getElementById("darkmode");
  if (button.innerHTML === "☾") {
    button.innerHTML = "☀";
  }
  else {
    button.innerHTML = "☾";
  }
}

function checkSystemColorScheme() {
  console.log('checkSystemColorScheme() called');
  var button = document.getElementById("darkmode");
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle('dark-mode');
    console.log('checkSystemColorScheme() toggled');
    button.innerHTML = "☀";
  }
  else
  {
    var button = document.getElementById("darkmode");
    button.innerHTML = "☾";
    console.log('checkSystemColorScheme() not toggled');
  }
}

// Llamar a la función para comprobar el esquema de color del sistema al cargar la página
checkSystemColorScheme();

// Campo de búsqueda: TODO
function desresaltar(text) {
  var desresaltado = text.replace(/<[^>]+>/g, function(match) {
    return match.replace(/./g, " ");
  });
  return desresaltado;
}

function buscar() { //TODO: Funciona bastante mal, arreglar
  console.log("Función buscar() llamada");
  var searchTerm = document.getElementById("searchInput").value;
  console.log("Función buscar() llamada 2");
  var editor = document.getElementById("editor");
  var content = editor.innerHTML;
  
  // Remover estilos de resaltado anteriores
  editor.innerHTML = desresaltar(content);

  if (searchTerm !== "") {
    // Realizar búsqueda y resaltado
    var regex = new RegExp(searchTerm, "gi");
    editor.innerHTML = content.replace(regex, "<span class='highlighted'>$&</span>");
  }
}

