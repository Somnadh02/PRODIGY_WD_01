window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#222';
  } else {
      navbar.style.backgroundColor = '#333';
  }
});

document.querySelector('.cta-button').addEventListener('click', function() {
  window.location.href = '#about';
});
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const carAnimation = document.getElementById("carAnimation");
  carAnimation.style.left = "100vw";

  setTimeout(() => {
      carAnimation.style.left = "-100px";
  }, 1000);

  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  // Send email
  Email.send({
      SecureToken: "your-secure-token",
      To: "your-email@example.com",
      From: email,
      Subject: "New Contact Form Submission",
      Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
  }).then((response) => {
      alert("Message sent successfully!");
      event.target.reset();
  }).catch((error) => {
      alert("There was an error sending your message. Please try again.");
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  let currentIndex = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          if (i === index) {
              slide.style.transform = 'translateX(0)';
          } else {
              slide.style.transform = 'translateX(-100%)';
          }
      });
  }

  function goToNextSlide() {
      if (currentIndex < slides.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      showSlide(currentIndex);
  }

  function goToPrevSlide() {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = slides.length - 1;
      }
      showSlide(currentIndex);
  }

  prevButton.addEventListener('click', goToPrevSlide);
  nextButton.addEventListener('click', goToNextSlide);

});