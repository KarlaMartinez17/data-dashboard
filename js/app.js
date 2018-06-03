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

// Show submenu2 countries
var submenuTwo = document.getElementsByClassName('submenu2');
for(var i = 0; i < submenuTwo.length; i++ ) {
    submenuTwo[i].addEventListener('mouseover', function(e){
        e.preventDefault();
        if(this.getElementsByClassName('generation')[0])
            this.getElementsByClassName('generation')[0].classList.remove('hide');
    });
    submenuTwo[i].addEventListener('mouseout', function(e){
        e.preventDefault();
        if(this.getElementsByClassName('generation')[0])
            this.getElementsByClassName('generation')[0].classList.add('hide');
    });
}

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

//FUNCIÓN NÚMERO DE ESTUDIANTES INACTIVAS
function inactiveStudents(sede, generacion) {
  var studentsInactiveName = [];
  var studentsInactive;
  var totalStudentsActive;

  for (var i = 0; i < data[sede][generacion].students.length; i++) {
      if (data[sede][generacion].students[i].active === false) {
          studentsInactiveName.push(data[sede][generacion].students[i].name);
          studentsInactive = studentsInactiveName.length;
      }
  }
  return studentsInactive;
}

//var containerActiveStudents = document.getElementById('numberOfstudents');
//var numberStudents = document.createTextNode('p')

//console.log(activeStudents("AQP", "2016-2"));
//console.log(activeStudents("AQP", "2017-1"));

var containerStudents = document.getElementById('numberOfstudents');
var elementP = document.createElement('p');
var containerNewData = document.createElement('div');

var containerInactiveStudents = document.getElementById('inactive-students');
var elementPinactiveS = document.createElement('p');
var containerNewDataInactiveS = document.createElement('div');

//Event that shows info students in Arequipa, generation 2016-2
var gen20162AQP = document.getElementById('ar20162');
gen20162AQP.addEventListener('click', function(){
    //Active students
  var studentsArequipa20162 = activeStudents("AQP", "2016-2");
  var studentsActiveArquipa = document.createTextNode(studentsArequipa20162);
  elementP.appendChild(studentsActiveArquipa);
  containerNewData.appendChild(elementP);
  containerStudents.appendChild(containerNewData);

  //Inactive students
  var inactiveStudentsArequipa20162 = inactiveStudents("AQP", "2016-2");
  var studentsInactiveArquipa = document.createTextNode(inactiveStudentsArequipa20162);
  elementPinactiveS.appendChild(studentsInactiveArquipa);
  containerNewDataInactiveS.appendChild(elementPinactiveS);
  containerInactiveStudents.appendChild(containerNewDataInactiveS);
})

//Event that shows info students in Arequipa, generation 2017-1
var gen20171AQP = document.getElementById('ar20171');
gen20171AQP.addEventListener('click', function(){
    //Active students
  var studentsArequipa20171 = activeStudents("AQP", "2017-1");
  var studentsActiveArquipa = document.createTextNode(studentsArequipa20171);
  elementP.appendChild(studentsActiveArquipa);
  containerNewData.appendChild(elementP);
  containerStudents.appendChild(containerNewData);

  //Inactive students
  var inactiveStudentsArequipa20171 = inactiveStudents("AQP", "2017-1");
  var studentsInactiveArquipa = document.createTextNode(inactiveStudentsArequipa20171);
  elementPinactiveS.appendChild(studentsInactiveArquipa);
  containerNewDataInactiveS.appendChild(elementPinactiveS);
  containerInactiveStudents.appendChild(containerNewDataInactiveS);
})

//Event that shows info students in Lima, generation 2016-2
var gen20162LIM = document.getElementById('li20162');
gen20162LIM.addEventListener('click', function(){
    //Active students
  var studentsLima20162 = activeStudents("LIM", "2016-2");
  var studentsActiveLima = document.createTextNode(studentsLima20162);
  elementP.appendChild(studentsActiveLima);
  containerNewData.appendChild(elementP);
  containerStudents.appendChild(containerNewData);

  //Inactive students
  var inactiveStudentsLima20162 = inactiveStudents("LIM", "2016-2");
  var studentsInactiveLima = document.createTextNode(inactiveStudentsLima20162);
  elementPinactiveS.appendChild(studentsInactiveLima);
  containerNewDataInactiveS.appendChild(elementPinactiveS);
  containerInactiveStudents.appendChild(containerNewDataInactiveS);
})

//Event that shows info students in Lima, generation 2017-1
var gen20171LIM = document.getElementById('li20171');
gen20171LIM.addEventListener('click', function(){
    //Active students
  var studentsLima20171 = activeStudents("LIM", "2017-1");
  var studentsActiveLima = document.createTextNode(studentsLima20171);
  elementP.appendChild(studentsActiveLima);
  containerNewData.appendChild(elementP);
  containerStudents.appendChild(containerNewData);

    //Inactive students
   var inactiveStudentsLima20171 = inactiveStudents("LIM", "2017-1");
   var studentsInactiveLima = document.createTextNode(inactiveStudentsLima20171);
   elementPinactiveS.appendChild(studentsInactiveLima);
   containerNewDataInactiveS.appendChild(elementPinactiveS);
   containerInactiveStudents.appendChild(containerNewDataInactiveS);
})

//Event that shows info students in Lima, generation 2017-2
var gen20172LIM = document.getElementById('li20172');
gen20172LIM.addEventListener('click', function(){
    //Active students
  var studentsLima20172 = activeStudents("LIM", "2017-2");
  var studentsActiveLima = document.createTextNode(studentsLima20172);
  elementP.appendChild(studentsActiveLima);
  containerNewData.appendChild(elementP);
  containerStudents.appendChild(containerNewData);

  //Inactive students
 var inactiveStudentsLima20172 = inactiveStudents("LIM", "2017-2");
 var studentsInactiveLima = document.createTextNode(inactiveStudentsLima20172);
 elementPinactiveS.appendChild(studentsInactiveLima);
 containerNewDataInactiveS.appendChild(elementPinactiveS);
 containerInactiveStudents.appendChild(containerNewDataInactiveS);
})

//Event that shows info students in Cd Mexico, generation 2017-1
var gen20171MX = document.getElementById('cdmx20171');
gen20171MX.addEventListener('click', function(){
      //Active students
  var studentsMx20171 = activeStudents("CDMX", "2017-1");
  var studentsActiveCdMx = document.createTextNode(studentsMx20171);
  elementP.appendChild(studentsActiveCdMx);
  containerNewData.appendChild(elementP);
  containerStudents.appendChild(containerNewData);

  //Inactive students
 var inactiveStudentsMx20171 = inactiveStudents("CDMX", "2017-1");
 var studentsInactiveCdMx = document.createTextNode(inactiveStudentsMx20171);
 elementPinactiveS.appendChild(studentsInactiveCdMx);
 containerNewDataInactiveS.appendChild(elementPinactiveS);
 containerInactiveStudents.appendChild(containerNewDataInactiveS);
})

//Event that shows info students in Cd Mexico, generation 2017-2
var gen20172MX = document.getElementById('cdmx20172');
gen20172MX.addEventListener('click', function(){
    //Active students
  var studentsMx20172 = activeStudents("CDMX", "2017-2");
  var studentsActiveCdMx = document.createTextNode(studentsMx20172);
  elementP.appendChild(studentsActiveCdMx);
  containerNewData.appendChild(elementP);
  containerStudents.appendChild(containerNewData);

  //Inactive students
 var inactiveStudentsMx20172 = inactiveStudents("CDMX", "2017-2");
 var studentsInactiveCdMx = document.createTextNode(inactiveStudentsMx20172);
 elementPinactiveS.appendChild(studentsInactiveCdMx);
 containerNewDataInactiveS.appendChild(elementPinactiveS);
 containerInactiveStudents.appendChild(containerNewDataInactiveS);
})

//Event that shows info students in Santiago, generation 2016-2
var gen20162SCL = document.getElementById('s20162');
gen20162SCL.addEventListener('click', function(){
  //Active students
  var studentsSCL20162 = activeStudents("SCL", "2016-2");
  var studentsActiveSCL = document.createTextNode(studentsSCL20162);
  elementP.appendChild(studentsActiveSCL);
  containerNewData.appendChild(elementP);
  containerStudents.appendChild(containerNewData);

    //Inactive students
   var inactiveStudentsSCL20162 = inactiveStudents("SCL", "2016-2");
   var studentsInactiveSCL = document.createTextNode(inactiveStudentsSCL20162);
   elementPinactiveS.appendChild(studentsInactiveSCL);
   containerNewDataInactiveS.appendChild(elementPinactiveS);
   containerInactiveStudents.appendChild(containerNewDataInactiveS);
})

//Event that shows info students in Santiago, generation 2017-1
var gen20171SCL = document.getElementById('s20171');
gen20171SCL.addEventListener('click', function(){
  //Active students
  var studentsSCL20171 = activeStudents("SCL", "2017-1");
  var studentsActiveSCL = document.createTextNode(studentsSCL20171);
  elementP.appendChild(studentsActiveSCL);
  containerNewData.appendChild(elementP);
  containerStudents.appendChild(containerNewData);

    //Inactive students
   var inactiveStudentsSCL20171 = inactiveStudents("SCL", "2017-1");
   var studentsInactiveSCL = document.createTextNode(inactiveStudentsSCL20171);
   elementPinactiveS.appendChild(studentsInactiveSCL);
   containerNewDataInactiveS.appendChild(elementPinactiveS);
   containerInactiveStudents.appendChild(containerNewDataInactiveS);
})

//Event that shows info students in Santiago, generation 2017-2
var gen20172SCL = document.getElementById('s20172');
gen20172SCL.addEventListener('click', function(){
  //Active students
  var studentsSCL20172 = activeStudents("SCL", "2017-2");
  var studentsActiveSCL = document.createTextNode(studentsSCL20172);
  elementP.appendChild(studentsActiveSCL);
  containerNewData.appendChild(elementP);
  containerStudents.appendChild(containerNewData);

    //Inactive students
   var inactiveStudentsSCL20172 = inactiveStudents("SCL", "2017-2");
   var studentsInactiveSCL = document.createTextNode(inactiveStudentsSCL20172);
   elementPinactiveS.appendChild(studentsInactiveSCL);
   containerNewDataInactiveS.appendChild(elementPinactiveS);
   containerInactiveStudents.appendChild(containerNewDataInactiveS);
})


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

//console.log(disableStudents("AQP", "2016-2"));
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


//FUNCIÓN PARA OBTENER DATOS DE CADA SPRINT DE LA ESTUDIANTE
function getSprintData(sprint) {
  var newSprint = {};
  newSprint.total = sprint.score.tech + sprint.score.hse;
  newSprint.tech = sprint.score.tech;
  newSprint.hse = sprint.score.hse;
  newSprint.totalPercentage = (newSprint.total * 100) / 3000;
  newSprint.approveSprint = newSprint.totalPercentage >= 70;
  newSprint.techPercentage = (newSprint.tech * 100) / 1800;
  newSprint.approveTech = newSprint.techPercentage >= 70;
  newSprint.hsePercentage = (newSprint.hse * 100) / 1200;
  newSprint.approveHse = newSprint.hsePercentage >= 70;

  return newSprint;
}



//FUNCIÓN PARA OBTENER DATOS INDIVIDUALES DE CADA ESTUDIANTE ACTIVA
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
          var sprints = [];

          for(var j = 0; j < student.sprints.length; j++) {
              averageHse += student.sprints[j].score.hse;
              averageTech += student.sprints[j].score.tech;
              sprints.push(getSprintData(student.sprints[j]));

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
          newStudent.sprints = sprints;

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
//console.log(getActiveStudents("AQP", "2016-2"));
