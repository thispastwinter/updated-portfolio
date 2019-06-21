const projectsLink = document.getElementsByClassName('projects');

Array.from(projectsLink).forEach(function (element) {
  element.addEventListener('mouseenter', function () {
    let projectPath = this.getAttribute('data-path');
    let imgDiv = document.getElementById('hover-img');
    let img = `<img width="450" src="${projectPath}">`
    imgDiv.innerHTML = img;
  })
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById('navbar');
let navLinks = navbar.getElementsByTagName('a');

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    for(let i=0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('nav-links');
      navLinks[i].classList.remove('link');
      navLinks[i].style.color = 'black';
      navLinks[i].style.textDecoration = 'none';
    }
    navbar.style.backgroundColor = 'rgba(117, 117, 117, 0.3)';
    navbar.style.height = '100px';
    navbar.style.fontSize = '20px';
  } else {
    for(let i=0; i < navLinks.length; i++) {
      navLinks[i].classList.add('nav-links');
      navLinks[i].classList.add('link');
      navLinks[i].style.color = 'none';
    }
    navbar.style.backgroundColor = 'transparent';
    navbar.style.fontSize = '20px';
    navbar.style.height = '';
    navbar.classList.remove('sticky');
  }
}
