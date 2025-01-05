document.addEventListener("DOMContentLoaded", function () {
  // Text to display in typing effect
  const typingText = "Hello, my name is Le Huy Vu...... 🤷‍♂️";
  const typingElement = document.getElementById("typing-text");
  let index = 0;

  // Typing effect function
  function typeWriter() {
    if (index < typingText.length) {
      typingElement.innerHTML += typingText.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // Adjust speed of typing
    }
  }

  typeWriter();

  // Hide preloader once the content is loaded
  window.onload = function () {
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      preloader.style.opacity = 0;
      preloader.style.transition = "opacity 0.5s ease";
      setTimeout(() => preloader.style.display = "none", 500);
    }, 2000); // Delay to ensure typing animation completes
  };
});
