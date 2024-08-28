// Replace visitor name
let visitorName = prompt("Please enter your name.", "");
document.getElementById("visitor-name").innerHTML = visitorName;

// Validate Form
function validateForm() {
  let isValid = true;

  // Clear previous errors
  document.getElementById("error-name").innerHTML = "";
  document.getElementById("error-dob").innerHTML = "";
  document.getElementById("error-gender").innerHTML = "";
  document.getElementById("error-message").innerHTML = "";

  // Validasi Name
  const name = document.forms["message-form"]["name-input"].value;
  if (name == "") {
    document.getElementById("error-name").innerHTML = "Name is required";
    isValid = false;
  }

  // Validasi Date of birth
  const dob = document.getElementById("dob-input").value;
  if (dob === "") {
    document.getElementById("error-dob").innerHTML =
      "Date of Birth is required";
    isValid = false;
  }

  // Validasi Gender
  const gender = document.querySelector('input[name="gender-input"]:checked');
  if (!gender) {
    document.getElementById("error-gender").innerHTML = "Gender is required";
    isValid = false;
  }

  // Validasi Message
  const message = document.getElementById("message-input").value;
  if (message === "") {
    document.getElementById("error-message").innerHTML = "Message is required";
    isValid = false;
  }

  if (isValid) {
    displayOutput(name, dob, gender.value, message);
  }

  return false;
}

// Show output
function displayOutput(name, dob, gender, message) {
  const output = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Message:</strong> ${message}</p>
  `;
  document.getElementById("output").innerHTML = output;
}

// SlideShow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
