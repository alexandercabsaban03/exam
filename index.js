function validateLogin() {
  // Get input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorElement = document.getElementById("error");

  // Simple validation
  if (username === "" || password === "") {
    errorElement.innerText = "Please enter both username and password.";
    return;
  }

  // Check if the username and password match the expected values
  if (username === "alexa" && password === "123") {
    errorElement.innerText = "Login successful!";
    window.location.href = 'game.html'; // Redirect to home.html
            
    // Redirect to another page or perform other actions after successful login.
  } else {
    errorElement.innerText = "Invalid username or password. Please try again.";
  }
}
