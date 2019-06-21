const projectsLink = document.getElementsByClassName('projects');

Array.from(projectsLink).forEach(function (element) {
  element.addEventListener('mouseenter', function () {
    let projectPath = this.getAttribute('data-path');
    let imgDiv = document.getElementById('hover-img');
    let img = `<img width="450" src="${projectPath}">`
    imgDiv.innerHTML = img;
  })
});

