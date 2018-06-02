var showTabs = function(e){
  var selectedTab = e.target.dataset.tabseleccionado;
  var students = document.getElementById('estudiantes');
  var coaches = document.getElementById('coaches');
  var jedis = document.getElementById('jedi');
  if(selectedTab == 'tabEstudiantes'){
    students.style.display = 'block';
    coaches.style.display = 'none';
    jedis.style.display = 'none';
  } else if(selectedTab == 'tabCoachs') {
    students.style.display = 'none';
    coaches.style.display = 'block';
    jedis.style.display = 'none';
  } else if(selectedTab == 'tabJedi') {
    students.style.display = 'none';
    coaches.style.display = 'none';
    jedis.style.display = 'block';
  }
}

var loadPage = function(){
  var students = document.getElementById('estudiantes');
  var coaches = document.getElementById('coaches');
  var jedis = document.getElementById('jedi');
  students.style.display = 'none';
  coaches.style.display = 'none';
  jedis.style.display = 'none';
  var tabElements = document.getElementsByClassName('tab');
  for(var i = 0; i < tabElements.length; i++) {
    tabElements[i].addEventListener('click', showTabs);
  }
}

loadPage();
