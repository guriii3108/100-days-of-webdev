// Select important elements
const form = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the reload

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic Validation
  if (!username || !email || !message) {
    feedback.textContent = "❌ Please fill in all the fields.";
    feedback.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    feedback.textContent = "⚠️ Please enter a valid email address.";
    feedback.style.color = "orange";
    return;
  }

  // Show success message
  feedback.textContent = `✅ Thank you, ${username}! Your message has been sent successfully.`;
  feedback.style.color = "green";

  // Clear form
  form.reset();
});