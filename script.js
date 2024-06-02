import './styles.css';

let scrollTop = () => {
  const scrollTop = document.getElementById('scroll-top');

  if (window.scrollY >= 200) {
    scrollTop.classList.add('show-scroll');
  } else {
    scrollTop.classList.remove('show-scroll');
  }
};

window.addEventListener('scroll', scrollTop);


let toggleMenu = () => {
  const menu = document.getElementById('menu');
  const icon = document.getElementById('icon');

  menu.classList.toggle('open');
  icon.classList.toggle('open');
};

document.getElementById('icon').addEventListener('click', toggleMenu);
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', toggleMenu);
});