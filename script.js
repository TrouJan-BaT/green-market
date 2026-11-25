
var form = document.getElementById("contactForm");
var status = document.getElementById("formStatus");

form.onsubmit = function(event) {

  event.preventDefault();
  var name = document.getElementById("contactName").value;
  var email = document.getElementById("contactEmail").value;
  var subject = document.getElementById("contactSubject").value;
  var message = document.getElementById("contactMessage").value;

  if (name == "" || email == "" || subject == "" || message == "") {
    status.textContent = "Please fill in all the fields.";
  } else {
    status.textContent = "Your message is ready, but this website cannot send it yet.";
  }
};
