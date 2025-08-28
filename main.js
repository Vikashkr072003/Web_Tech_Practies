document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const messageDiv = document.getElementById('message');

  if (password !== confirmPassword) {
      messageDiv.textContent = "Passwords do not match!";
      return;
  }

  messageDiv.textContent = "Registration successful!";
  messageDiv.style.color = "green";

  // Here you can add code to send the form data to the server
});