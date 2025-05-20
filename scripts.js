document.getElementById('contact-form').addEventListener('submit', function (e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const status = document.getElementById('form-status');

  if (!name || !email || !message) {
    e.preventDefault();
    status.textContent = 'Please fill out all fields.';
    status.style.color = 'red';
  }
});
