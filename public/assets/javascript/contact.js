$('.submit').on('click', function () {
  const name = $('#name').val();
  const email = $('#email').val();
  const message = $('#message').val();
  console.log(name, email, message);
  $.post('/', {
    type: 'POST',
    name: name,
    email: email,
    message: message
  }).then(function (data) {
    const modal = document.getElementById('modal');
    const paragraph = document.getElementById('info');
    if (data === 'success') {
      modal.style.display = 'block';
      paragraph.innerHTML = 'Your Message Has Been Sent!';
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    } else {
      modal.style.display = 'block';
      paragraph.innerHTML = 'We apologize, but your message can not be sent at this time!';
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    }
  });
})