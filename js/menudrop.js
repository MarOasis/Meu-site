//menu drop
const toggle = document.getElementById('toggle');
const menuDropdown = document.querySelector('.menu-dropdown');

toggle.addEventListener('change', function () {
  if (toggle.checked) {
    menuDropdown.style.display = 'block';
  } else {
    menuDropdown.style.display = 'none';
  }
});