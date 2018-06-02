// Data base
console.log(data);

// Show submenu countries

var submenu = document.getElementsByClassName('submenu');
for(var i = 0; i < submenu.length; i++ ) {
  submenu[i].addEventListener('click', function(e){
    e.preventDefault();
  var listSubmenu = this.getElementsByClassName('sede-cities')[0];
  if(listSubmenu.classList.contains('hide')) {
    listSubmenu.classList.remove('hide');
    listSubmenu.classList.add('show');
  } else {
    listSubmenu.classList.remove('show');
    listSubmenu.classList.add('hide');
  }
}
)};

//Show quick information

var generation = document.getElementsByClassName('generation');
for(var j = 0; j < generation.length; j++) {
  generation[j].addEventListener('click', function(e){
    var button = document.getElementById('main-button');
    var mainImage = document.getElementById('main-picture');
    var quickInfo = document.getElementById('quickInfo');
    button.style.display = 'block';
    mainImage.style.display = 'none';
    quickInfo.style.display = 'block';
  })
};


//FUNCIÓN NÚMERO DE ESTUDIANTES ACTIVAS
function activeStudents(sede, generacion) {
  var studentsActiveName = [];
  var studentsActive;
  var studentsPercentageActive;

  for (var h = 0; h < data[sede][generacion].students.length; h++) {
      if (data[sede][generacion].students[h].active === true) {
          studentsActiveName.push(data[sede][generacion].students[h].name);
          studentsActive = studentsActiveName.length;
      }
  }
  return studentsActive;
}

//var containerActiveStudents = document.getElementById('numberOfstudents');
//var numberStudents = document.createTextNode('p')

//console.log(activeStudents("AQP", "2016-2"));
//console.log(activeStudents("AQP", "2017-1"));

//FUNCIÓN NOMBRE Y PORCENTAJE ESTUDIANTES DESERTARON
function disableStudents(sede, generacion) {
  var studentsNameLeft = [];
  var studentsLeft;
  var studentsPercentageAndNameLeft = [];

  for (var h = 0; h < data[sede][generacion].students.length; h++) {
      if (data[sede][generacion].students[h].active === false) {
          studentsNameLeft.push(data[sede][generacion].students[h].name);
          studentsLeft = studentsNameLeft.length;
      }
  }

  studentsPercentageAndNameLeft = [studentsNameLeft, Math.round((studentsLeft * 100) / data[sede][generacion].students.length) + "%"];

  return studentsPercentageAndNameLeft;
}

console.log(disableStudents("AQP", "2016-2"));
//console.log(disableStudents("AQP", "2017-1"));


//#ESTUDIANTES SATISFECHAS (CUMPLE + SUPERA)
function percentageStudentsAccomplishAddPass(sede, generacion) {
  var studentsSprintsAccomplish = [];
  var studentsSprintsPass = [];
  var totalStudentsSprintAccAddPass = [];
  var percentageStudentsAccAndPass = 0;

  for (var c = 0; c < data[sede][generacion].ratings.length; c++) {
      studentsSprintsAccomplish.push(data[sede][generacion].ratings[c].student.cumple);
  }
  console.log(studentsSprintsAccomplish);

  for (var d = 0; d < data[sede][generacion].ratings.length; d++) {
      studentsSprintsPass.push(data[sede][generacion].ratings[d].student.supera);
  }
  console.log(studentsSprintsPass);

  for (var e = 0; e < studentsSprintsAccomplish.length; e++) {
      totalStudentsSprintAccAddPass.push(studentsSprintsAccomplish[e] + studentsSprintsPass[e]);
  }
  console.log(totalStudentsSprintAccAddPass);

  for (var f = 0; f < totalStudentsSprintAccAddPass.length; f++) {
      percentageStudentsAccAndPass += totalStudentsSprintAccAddPass[f] / data[sede][generacion].ratings.length;
  }
  return percentageStudentsAccAndPass + "%";
}

//console.log(percentageStudentsAccomplishAddPass("AQP", "2016-2"));
//console.log(percentageStudentsAccomplishAddPass("AQP", "2017-1"));

//PUNTUACIÓN PROMEDIO COACHES
function averageCoaches(sede, generacion) {
  var sprintCoach = [];
  var averageCoach= 0;

  for (var c = 0; c < data[sede][generacion].ratings.length; c++) {
      sprintCoach.push(data[sede][generacion].ratings[c].teacher);
  }
  console.log(sprintCoach);

  for (var e = 0; e < sprintCoach.length; e++) {
      averageCoach += sprintCoach[e] / data[sede][generacion].ratings.length ;
  }
  return averageCoach;
}

//console.log(averageCoaches("AQP", "2016-2"));
//console.log(averageCoaches("AQP", "2017-1"));

//PUNTUACIÓN PROMEDIO JEDI MASTERS
function averageJediMasters(sede, generacion) {
  var sprintJedi = [];
  var averageJedi= 0;

  for (var c = 0; c < data[sede][generacion].ratings.length; c++) {
      sprintJedi.push(data[sede][generacion].ratings[c].jedi);
  }
  console.log(sprintJedi);

  for (var e = 0; e < sprintJedi.length; e++) {
      averageJedi += sprintJedi[e] / data[sede][generacion].ratings.length ;
  }
  return averageJedi;
}

//console.log(averageJediMasters("AQP", "2016-2"));
//console.log(averageJediMasters("AQP", "2017-1"));


//FUNCIÓN PARA OBTENER DATOS INDIVIDUALES DE LAS ESTUDIANTES DE CADA GENERACIÓN 
function getActiveStudents(sede, generacion) {
    
  var students = data[sede][generacion].students;
  var activeStudents = [];

  for(var i = 0; i < students.length; i++) {
      var student = students[i];
      var newStudent = {};

      if(student.active === true) {
          var averageHse = 0;
          var averageTech = 0;
          var totalSprints = 0;
          var minimumScoreTech = 0;
          var minimumScoreHse = 0;
          var minimumScoreTotal = 0;
          var passTech = false;
          var passHse = false;
          var passTotal = false;

          for(var j = 0; j < student.sprints.length; j++) {
              averageHse += student.sprints[j].score.hse; 
              averageTech += student.sprints[j].score.tech;

              console.log(student.sprints[j].score.tech);
          }
          totalSprints = averageHse + averageTech;
          minimumScoreTech = 1260 * student.sprints.length;
          minimumScoreHse = 840 * student.sprints.length;
          minimumScoreTotal = 2100 * student.sprints.length;

          console.log(averageTech);
          
          if(averageTech >= minimumScoreTech) {
              passTech = true;
          }
          
          if(averageHse >= minimumScoreHse) {
              passHse = true;
          }
          
          if(totalSprints >= minimumScoreTotal) {
              passTotal = true;
          }

          newStudent.name = student.name;
          newStudent.passTech = passTech;
          newStudent.passHse = passHse;
          newStudent.passTotal = passTotal;

          activeStudents.push(newStudent);
      }

  }

  return activeStudents;
}


//FUNCIÓN PARA OBTENER DATOS GENERALES DE GENERACIÓN (TOTAL, TECH. HSE)
function setGeneralData(sede, generacion) {
  var trueStudents = getActiveStudents(sede, generacion);
  var approvedTotalStudents = 0;
  var approvedTechStudents = 0;
  var approvedHseStudents = 0;
  var percentageApprovedTotalStudents = 0;
  var percentageApprovedTechStudents = 0;
  var percentageApprovedHseStudents = 0;

  console.log(trueStudents);

  for(var i = 0; i < trueStudents.length; i++) {
      if(trueStudents[i].passTotal === true) {
          approvedTotalStudents++;
      }

      if(trueStudents[i].passTech === true) {
          approvedTechStudents++;
      }

      if(trueStudents[i].passHse === true) {
          approvedHseStudents++;
      }
  }

  percentageApprovedTotalStudents = ((100 * approvedTotalStudents)  / trueStudents.length) + "%";
  percentageApprovedTechStudents = ((100 * approvedTechStudents)  / trueStudents.length) + "%";
  percentageApprovedHseStudents = ((100 * approvedHseStudents)  / trueStudents.length) + "%";

  return {
      hse: {
          activeStudents: trueStudents.length,
          approvedStudents : approvedHseStudents,
          percentageApproved : percentageApprovedHseStudents
      },
      tech: {
          activeStudents: trueStudents.length,
          approvedStudents : approvedTechStudents,
          percentageApproved : percentageApprovedTechStudents
      },
      total: {
          activeStudents: trueStudents.length,
          approvedStudents : approvedTotalStudents,
          percentageApproved : percentageApprovedTotalStudents
      }
  }
}


//var paragraph = document.getElementById("proof");
//paragraph.innerHTML = setGeneralData("AQP", "2016-2").tech.approvedStudents;

//console.log(setGeneralData("AQP", "2016-2"));
