
 
 
  

  function setFechaHoraActual() {
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    const año = hoy.getFullYear();
    const horas = String(hoy.getHours()).padStart(2, '0');
    const minutos = String(hoy.getMinutes()).padStart(2, '0');
    const segundos = String(hoy.getSeconds()).padStart(2, '0');
  
    const fechaHoraActual = `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
    document.getElementById('fecha').value = fechaHoraActual;
  }
  
  // Actualizar la fecha y hora cada segundo
  function iniciarReloj() {
    setInterval(setFechaHoraActual, 1000); // Llama a la función cada 1000 ms (1 segundo)
  }
  
  // Establecer la fecha y hora actual al cargar la página
  window.onload = function () {
    setFechaHoraActual(); // Establece la fecha y hora inmediatamente
    iniciarReloj(); // Comienza el reloj en tiempo real
  };








     




 
 



document.getElementById('BTN').addEventListener('click', function(e) {
    e.preventDefault();
    var formData = new FormData(document.getElementById('form'));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbwqPrwX03gePmg1f8XFhTW2hopbD2uEIJvTvGcIG53RW7cVzf61oJVseeg-Huu4ETkehQ/exec');
    xhr.reload = function() {
      document.getElementById('form').reload(); 
     
    };
    xhr.send(formData);
    alert('¡Registro exitoso!');
    
  });








 const especialistas = {
    "ALC01": "Alejandro Cesped",
    "AJO02": "Amalia Jorquera Jorquera",
    "FHA03": "Fernanda Astorga Henriquez",
    "VPA04": "Paola Varas",
    "SLE05": "Serchelin Leon Rozas",
    "GMA06": "Maria soledad gonzalez",
    "PAC07": "Camila Pavez Torrijo",
    "TIS08": "Sofia antiquera",
    "BMR09": "Miguel Briceño",
    "AEN10": "Dafne Araya English",
         };







  function verificarClave() {
        var clave = document.getElementById("clave").value;
    var imagen = document.querySelector('.img2');
    if (especialistas[clave]) {
      if (Array.isArray(especialistas[clave])) { 
        document.getElementById("form").style.display = "block";
        document.getElementById("acceso").style.display = "none";
        imagen.style.display = 'none';
        cargarEspecialistasGenericos(especialistas[clave]);
      } else {
        document.getElementById("form").style.display = "block";
        document.getElementById("acceso").style.display = "none";
        imagen.style.display = 'none';
        actualizarEspecialista(clave);
      }
    } else {
      alert("Clave incorrecta");
    }
  }


function actualizarEspecialista(clave) {
  const selectEspecialista = document.getElementById("selectFuncionario");

  // Elimina todas las opciones existentes
  selectEspecialista.innerHTML = "";

  // Agrega la opción correspondiente a la clave
  const opcion = document.createElement("option");
  opcion.value = especialistas[clave];
  opcion.text = especialistas[clave];
  selectEspecialista.add(opcion);

  // Agrega una opción por defecto
  const opcionDefecto = document.createElement("option");
  opcionDefecto.value = "";
  opcionDefecto.text = "Seleccione un especialista";
  selectEspecialista.add(opcionDefecto);
}