var showTabs = function(e){
  var selectedTab = e.target.dataset.tabseleccionado;
  var students = document.getElementById('estudiantes');
  var coaches = document.getElementsByClassName('coaches')[0];
  var jedis = document.getElementById('jedi');
  if(selectedTab == 'tabEstudiantes'){
    students.style.display = 'block';
    coaches.style.display = 'none';
    jedis.style.display = 'none';
  } else if(selectedTab == 'tabCoachs') {
    students.style.display = 'none';
    coaches.style.display = 'block';
    jedis.style.display = 'none';

    var scoreCoachesAQP20162 = document.getElementById('score-coachesAQP20162');
    scoreCoachesAQP20162.innerHTML = averageCoaches("AQP", "2016-2").toFixed(2);

  } else if(selectedTab == 'tabJedi') {
    students.style.display = 'none';
    coaches.style.display = 'none';
    jedis.style.display = 'block';

    var scoreJedisAQP20162 = document.getElementById('score-jedisAQP20162');
    scoreJedisAQP20162.innerHTML = averageJediMasters("AQP", "2016-2").toFixed(2);
  }
}

var loadPage = function(){
  var students = document.getElementById('estudiantes');
  var coaches = document.getElementsByClassName('coaches')[0];
  var jedis = document.getElementById('jedi');
  students.style.display = 'block';
  coaches.style.display = 'none';
  jedis.style.display = 'none';
  var tabElements = document.getElementsByClassName('tab');
  for(var i = 0; i < tabElements.length; i++) {
    tabElements[i].addEventListener('click', showTabs);
  }
}

loadPage();

//PUNTUACIÓN PROMEDIO COACHES
function averageCoaches(sede, generacion) {
  var sprintCoach = [];
  var averageCoach= 0;

  for (var c = 0; c < data[sede][generacion].ratings.length; c++) {
      sprintCoach.push(data[sede][generacion].ratings[c].teacher);
  }
  //console.log(sprintCoach);

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
  //console.log(sprintJedi);

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

              //console.log(student.sprints[j].score.tech);
          }
          totalSprints = averageHse + averageTech;
          minimumScoreTech = 1260 * student.sprints.length;
          minimumScoreHse = 840 * student.sprints.length;
          minimumScoreTotal = 2100 * student.sprints.length;

            //console.log(averageTech);

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

  //console.log(trueStudents);

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

//console.log(setGeneralData("AQP", "2016-2"));
//console.log(getActiveStudents("AQP", "2016-2").name)

//var paragraph = document.getElementById("containerStudents");
//paragraph.innerHTML = setGeneralData("AQP", "2016-2").tech.approvedStudents;

//console.log(setGeneralData("AQP", "2016-2"));
//console.log(getActiveStudents("AQP", "2016-2"));
