const cardBlog = document.querySelectorAll('.card-blog');
const skill = document.querySelectorAll('.my-skill');
const cardPortfolio = document.querySelectorAll('.card-portfolio');

// Card Blog
cardBlog.forEach((cb, i) => {
  cb.dataset.aos = 'flip-left';
  cb.dataset.aosDelay = i * 100;
  cb.dataset.aosDuration = 1000;
});

// my skill
skill.forEach((ms, i) => {
  ms.dataset.aos = 'fade-up';
  ms.dataset.aosDelay = i * 200;
  ms.dataset.aosDuration = 1000;
});

// card portfolio
cardPortfolio.forEach((cp, i) => {
  cp.dataset.aos = 'fade-down';
  cp.dataset.aosDelay = i * 200;
  cp.dataset.aosDuration = 1000;
});

// hamburger
const hamburger = document.getElementById('hamburger');
const navLink = document.querySelector('#nav-link');

hamburger.addEventListener('click', function () {
  navLink.classList.toggle('nav-link');
});

// untuk navbar

window.onscroll = function () {
  const header = document.querySelector('header');
  const e = header.offsetTop;
  if (window.pageYOffset > e) {
    header.classList.add('navbar-fixed');
    header.classList.remove('navbar');
  } else {
    header.classList.remove('navbar-fixed');
    header.classList.add('navbar');
  }
};
