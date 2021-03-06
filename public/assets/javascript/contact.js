const modal = document.getElementById('modal');
const paragraph = document.getElementById('info');
const passOrFail = document.getElementById('pass-or-fail');
const submit = document.getElementById('submit');
const modalClose = document.getElementById('modal-close');

const modalTrigger = (context, response) => {
  modal.style.display = 'block';
  passOrFail.innerHTML = context;
  paragraph.innerHTML = response;
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  name.value = '';
  email.value = '';
  message.value = '';
};

submit.addEventListener('click', () => {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  if (name === '' || email === '' || message === '') {
    modalTrigger('Whoops!<br><h3><i class="fas fa-bomb"></i></h3>', 'You must fill out every field.');
  } else {
    submit.innerHTML = '<i class="fas fa-spin fa-circle-notch"></i>';
    console.log(name, email, message);
    axios.post('/', {
      name: name,
      email: email,
      message: message
    }).then((response) => {
      console.log(response);
      submit.innerHTML = 'Submit'
      if (response.data === 'success') {
        modalTrigger('Great Job!<br><h3><i class="far fa-thumbs-up"></i></h3>', `Thanks ${name}, your message has been sent.`);
      } else if (response.data === 'invalid') {
        modalTrigger('Uh-Oh!<br><h3><i class="fas fa-bomb"></i></h3>', 'We apologize, but that appears to be an invalid email.');
      } else {
        modalTrigger('Uh-Oh!<br><h1><i class="fas fa-bomb"></i></h1>', 'We apologize, but your message can not be sent at this time!');
      }
    }).catch((err) => {
      console.log(err);
    })
  }
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});