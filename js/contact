const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const success = document.getElementById('formSuccess');

    [nameError, emailError, messageError].forEach(el => el.textContent = '');
    success.classList.remove('show');

    if (!name.value.trim()) {
      nameError.textContent = 'Please enter your name.';
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      valid = false;
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      messageError.textContent = 'Please write a message of at least 10 characters.';
      valid = false;
    }

    if (valid) {
      success.classList.add('show');
      form.reset();
    }
  });
}
