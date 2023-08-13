document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const errorDiv = document.getElementById("error-message");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;
  
      if (name === "" || email === "" || phone === "" || message === "") {
        showError("Please fill in all fields.");
      } else if (!validateEmail(email)) {
        showError("Please enter a valid Gmail address.");
      } else if (validatePhone(phone)) {
        showError("Please enter a valid phone number.");
      } else {
        alert("Form submitted successfully!");
      }
    });
  
    function validateEmail(email) {
      const pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      return pattern.test(email);
    }
  
    function validatePhone(phone) {
        const pattern = /^\d{10}$/; // 10-digit phone number
        return pattern.test(phone);
    }
  
    function showError(message) {
      errorDiv.textContent = message;
    }
  });
  
