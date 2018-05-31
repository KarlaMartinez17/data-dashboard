/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// Show submenu countries

var submenu = document.getElementsByClassName('submenu');
for (var i = 0; i < submenu.length; i++ ) {
  submenu[i].addEventListener('click', function(e){
    e.preventDefault();
  var listSubmenu = this.getElementsByClassName('sede-cities')[0];
  if (listSubmenu.classList.contains('hide')) {
    listSubmenu.classList.remove('hide');
    listSubmenu.classList.add('show');
  } else {
    listSubmenu.classList.remove('show');
    listSubmenu.classList.add('hide');
  }
}
)};

// Function that hides the form

  var signIn = document.getElementById('sign-in');
  signIn.addEventListener('click', function() {
    e.preventDefault();
  var userForm = document.getElementById('userForm');
  userForm.style.display = 'none';
});
