console.log(data);

// *************************OBTENER DATOS DE LAS SEDES **************************************** 

var obtenerSedes = function (data) {
  var select = document.getElementById('sedes');
  var dataKeys = Object.keys(data);
  var optionDefault = document.createElement('option');
  optionDefault.innerHTML = 'SEDE';
  optionDefault.setAttribute('disabled', true);
  optionDefault.setAttribute('selected', true);
  select.appendChild(optionDefault);

  for (var jjj = 0; jjj < dataKeys.length; jjj++) {
    var option = document.createElement('option');;
    option.setAttribute('value', dataKeys[jjj]);
    option.innerHTML = dataKeys[jjj];
    select.appendChild(option);
  }
}

// *****************************OBTENER DATOS DE LAS GENERACIONES ******************************

var obtenerGeneracion = function (e) {

  var dataObj = data[e.target.value];
  var dataKeys = Object.keys(dataObj);
  var select = document.getElementById('generaciones');
  select.innerHTML = "";
  var optionDefault = document.createElement('option');
  optionDefault.innerHTML = 'GENERACION';
  optionDefault.setAttribute('disabled', true);
  optionDefault.setAttribute('selected', true);
  select.appendChild(optionDefault);
  for (var iii = 0; iii < dataKeys.length; iii++) {
    var generacion = document.createElement('option');
    generacion.setAttribute('value', dataKeys[iii]);
    generacion.innerHTML = dataKeys[iii];

    select.appendChild(generacion);



  }
}

// ***********************OBTENER DATOS DE LAS ESTUDIANTES POR GENERACION ******************************

var obtenerEstudiantes = function (e) {

  var sede = document.getElementById('sedes').value;
  console.log(sede);

  var generacion = e.target.value;
  console.log(generacion);


  var estudiantes = (data[sede][generacion].students);
  console.log(estudiantes);


  var divStudents = document.getElementById('students');
  divStudents.innerHTML = "";

  var activeStudents = 0;
  var inactiveStudents = 0;
  for (var iii = 0; iii < estudiantes.length; iii++) {
    var totalStudents = estudiantes.length;
    var currentStudent = estudiantes[iii];
    var studentName = currentStudent.name;
    var studentPhoto = currentStudent.photo;
    var studentStatus = currentStudent.active;
    if (studentStatus === true) {
      activeStudents++;
      console.log(activeStudents);
    } else {
      inactiveStudents++;
      console.log(inactiveStudents);
    }
    //activas(currentStudent, activeStudents, inactiveStudents);
    var student = document.createElement('div');
    student.setAttribute('class', 'student');
    student.innerHTML = '<div class="studentTemplate">' +
      '<h3>' + studentName + '</h3>' +
      '<img src="' + studentPhoto + '"' +
      '</div>';

    divStudents.appendChild(student);
  }

  var papaTemplate = document.getElementById('totalStudents');
  papaTemplate.innerHTML = "";
  var totalStudentsTemplate = document.createElement('div');
  totalStudentsTemplate.setAttribute('class', 'totalStudentsTemplate');
  totalStudentsTemplate.innerHTML = ' <div>' +
    '<h2>TOTAL DE ESTUDIANTES:' + totalStudents + '</h2>' +
    '</div>'
  papaTemplate.appendChild(totalStudentsTemplate);
}

// ************************** SACAR EL TOTAL DE ESTUDIANTES POR GENERACION ******************

var activas = function (currentStudent, activeStudents, inactiveStudents) {

  var studentStatus = currentStudent.active;
  if (studentStatus === true) {
     activeStudents++;
    console.log(activeStudents);
  } else {
    inactiveStudents++;
    console.log(inactiveStudents);
  }



}










document.getElementById('sedes').addEventListener('change', obtenerGeneracion);
document.getElementById('generaciones').addEventListener('change', obtenerEstudiantes);
obtenerSedes(data);
