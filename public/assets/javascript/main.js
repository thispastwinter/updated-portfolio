const modal2 = document.getElementById('modal2');
const portfolioLink = document.getElementsByClassName('standard-link');
const portfolioContent = document.getElementById('portfolio-content');

const modalTriggerMain = (content) => {
  modal2.style.display = 'block';
  portfolioContent.innerHTML = content;
}

Array.from(portfolioLink).forEach(function(element) {
  element.addEventListener('click', function () {
    modalTriggerMain(
      '<div class="grid">\
      <div class="grid-cell-lg">\
      <h1>Hello World!</h1>\
      </div>\
      </div>'
    );
  });
});