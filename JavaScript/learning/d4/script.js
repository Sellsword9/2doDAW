function guardarTexto() {
    var contenido = document.getElementById("editor").value;
    var archivo = new Blob([contenido], { type: "text/markdown" });
    var url = URL.createObjectURL(archivo);
    var enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "texto.md";
    enlace.click();
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
