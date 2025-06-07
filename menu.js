const menuButton = document.querySelector('.menu-button');
const menuDropdown = document.getElementById('menu-dropdown');

menuButton.addEventListener('click', () => {
  menuDropdown.classList.toggle('show');
});