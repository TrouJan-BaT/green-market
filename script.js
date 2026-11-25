const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  const status = document.querySelector("#formStatus");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    status.textContent = "Your message is valid, but it has not been sent. This site needs an email service to deliver messages.";
  });
}
