const modal = document.getElementById('modal');
const paragraph = document.getElementById('info');
const passOrFail = document.getElementById('pass-or-fail');

const modalTrigger = (context, response) => {
  modal.style.display = 'block';
  passOrFail.innerHTML = context;
  paragraph.innerHTML = response;
}

$('.submit').on('click', function () {
  if ($('#name').val() === '' || $('#email').val() === '' || $('#message').val() === '') {
    modalTrigger('Attention!', 'You must fill out every field.');
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
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
        modalTrigger('Success!', `Thanks ${name}, your message has been sent.`)
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = 'none';
          }
        }
      } else if (data === 'invalid') {
        modalTrigger('Attention!', 'We apologize, but that appears to be an invalid email.');
      } else {
        modalTrigger('Attention!', 'We apologize, but your message can not be sent at this time!');
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