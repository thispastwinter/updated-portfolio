$('.projects').hover(function () {
  var projectPath = $(this).attr('data-path');
  console.log(projectPath);
  var imgDiv = $('#hover-img');
  var img = `<img width="450" src="${projectPath}">`;
  console.log(img);
  $(imgDiv).html(img);
  imgDiv.slideDown(500);
});
