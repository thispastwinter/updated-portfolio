// Initialize Firebase

const config = {
  apiKey: "AIzaSyCAiSx8mj9229XZdCRM2crMG9koDwGDoIY",
  authDomain: "contact-form-13f1d.firebaseapp.com",
  databaseURL: "https://contact-form-13f1d.firebaseio.com",
  projectId: "contact-form-13f1d",
  storageBucket: "contact-form-13f1d.appspot.com",
  messagingSenderId: "1067981632438"
};
firebase.initializeApp(config);

const database = firebase.database();

// Sets initial variables and their values

let name = "";
let email = "";
let message = "";

$("#submit").on("click", function () {
  event.preventDefault();

  // Function that both shows a modal and hides it once 'Okay' is selected

  function modalTrigger() {
    $('.modal').modal('show');
    $('.okay').on("click", function () {
      $('.modal').modal('hide');
    })
  }

  // Takes the value of each input and assigns it to each variable

  name = $('#first_name').val().trim();
  email = $('#email').val().trim();
  message = $('#textarea1').val().trim();

  // If statment that triggers a modal when the user has not input any data

  if (name === "" || email === "" || message === "") {
    $('#modal2').modal('open');
  } else {

    // Creates an object and pushes the value to Firebase
    // Triggers modal informing user that content has been submitted succesfully

    $('#modal1').modal('open');
    database.ref().push({
      name: name,
      email: email,
      message: message,
    });
  }
  // Clears each input field after the submit button is clicked

  name = $('#first_name').val("");
  email = $('#email').val("");
  message = $('#textarea1').val("");

});