const modal = document.getElementById('modal');
const paragraph = document.getElementById('info');
const passOrFail = document.getElementById('pass-or-fail');

$('.submit').on('click', function () {
  if ($('#name').val() === '' || $('#email').val() === '' || $('#message').val() === '') {
    modal.style.display = 'block';
    passOrFail.innerHTML = 'Attention!'
    paragraph.innerHTML = 'You must fill out every field.'
  } else {
    $('.submit').html('<i class="fas fa-spin fa-circle-notch"></i>');
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
      $('.submit').text('Submit')
      if (data === 'success') {
        modal.style.display = 'block';
        passOrFail.innerHTML = 'Success!'
        paragraph.innerHTML = 'Your Message Has Been Sent.';
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = 'none';
          }
        }
      } else {
        modal.style.display = 'block';
        passOrFail.innerHTML = 'Attention!'
        paragraph.innerHTML = 'We apologize, but your message can not be sent at this time!';
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = 'none';
          }
        }
      }
    });
  }
})

$('#modal-close').on('click', function () {
  modal.style.display = 'none';
});