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
    button.style.display = 'block';
    mainImage.style.display = 'none';
  })
};
