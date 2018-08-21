console.log(data);

// *************************OBTENER DATOS DE LAS SEDES **************************************** 

var obtenerSedes = function (data) {
  var select = document.getElementById('sedes');
  var dataKeys = Object.keys(data);

  for (var iii = 0; iii < dataKeys.length; iii++) {
    var option = document.createElement('option');
    option.setAttribute('value', dataKeys[iii]);
    option.innerHTML = dataKeys[iii];
    select.appendChild(option);
  }
}

// *****************************OBTENER DATOS DE LAS GENERACIONES ******************************

var obtenerGeneracion = function(e){
 
  var dataObj = data[e.target.value];
  var dataKeys = Object.keys(dataObj);
  var select = document.getElementById('generaciones');
  select.innerHTML="";
  for (var iii = 0; iii < dataKeys.length; iii++){
    var generacion =document.createElement('option');
    generacion.setAttribute('value', dataKeys[iii]);
    generacion.innerHTML = dataKeys[iii];

    select.appendChild(generacion);

   
  }
} 

// ***********************OBTENER DATOS DE LAS ESTUDIANTES POR GENERACION ******************************

var obtenerEstudiantes = function(e){
 
  var sede = document.getElementById('sedes').value;
 
  var generacion = e.target.value;
  
  var estudiantes = (data[sede][generacion].students);

  var divStudents = document.getElementById('students');
  divStudents.innerHTML = "";

  for(var iii = 0; iii < estudiantes.length; iii++){
    var currentStudent = estudiantes[iii];
    var studentName = currentStudent.name;
    var studentPhoto = currentStudent.photo;
    var student =document.createElement('div'); 
    student.setAttribute('class', 'student');
    student.innerHTML =  '<div class="studentTemplate">'+
    '<h3>'+studentName+'</h3>'+
    '<img src="'+studentPhoto+'"'+
    '</div>';
    divStudents.appendChild(student);
  
  }
}

document.getElementById('sedes').addEventListener('change', obtenerGeneracion); 
document.getElementById('generaciones').addEventListener('change', obtenerEstudiantes);
obtenerSedes(data);
