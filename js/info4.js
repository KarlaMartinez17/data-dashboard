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

    var scoreCoachesLIM20171 = document.getElementById('score-coachesLIM20171');
    scoreCoachesLIM20171.innerHTML = averageCoaches("LIM", "2017-1");

  } else if(selectedTab == 'tabJedi') {
    students.style.display = 'none';
    coaches.style.display = 'none';
    jedis.style.display = 'block';

    var scoreJedisLIM20171 = document.getElementById('score-jedisLIM20171');
    scoreJedisLIM20171.innerHTML = averageJediMasters("LIM", "2017-1");
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
