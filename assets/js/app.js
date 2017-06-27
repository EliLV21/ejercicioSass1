var api = {
	url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'

};

var crearElementos = function(datosAlumna){
  var $alumna=$('<li class="alumna"/>').text( " "+ datosAlumna.name + " " + datosAlumna.pLastName + " " + datosAlumna.mLastName);
	console.log(datosAlumna.name)
  var $checkbox = $('<input type="checkbox" class="alumnaCheck"/>');
  $alumna.prepend($checkbox);
  var $label = $('<li/>').append($alumna);
  $("#listadoAlumnas").append($alumna);
};

$(document).ready(function(){
  $.getJSON(api.url,function(alumnas){
    alumnas.forEach(function(alumna){
        crearElementos(alumna);
    });
  });
});
