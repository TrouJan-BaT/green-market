var form = document.getElementById("contactForm");

if (form) {
  var status = document.getElementById("formStatus");
  var fields = [
    document.getElementById("contactName"),
    document.getElementById("contactEmail"),
    document.getElementById("contactSubject"),
    document.getElementById("contactMessage")
  ];

  function updateFieldColor(field) {
    field.classList.remove("field-valid", "field-invalid");
    if (field.value.trim() === "") return;

    field.classList.add(field.validity.valid ? "field-valid" : "field-invalid");
  }

  fields.forEach(function (field) {
    field.addEventListener("input", function () {
      updateFieldColor(field);
      status.textContent = "";
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    fields.forEach(function (field) {
      field.value = field.value.trim();
      updateFieldColor(field);
    });

    if (!form.checkValidity()) return;

    status.textContent = "Your message is ready, but this website cannot send it yet.";
  });
}
