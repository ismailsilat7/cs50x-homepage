window.addEventListener('load', function () {
    const loader = document.querySelector('.loading-screen');
    loader.style.display = 'none';
  });


document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with the class 'aboutHr'
  const aboutHrElements = document.querySelectorAll(".aboutHr");

  // Create an Intersection Observer for each aboutHr element
  aboutHrElements.forEach(aboutHr => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If the container is visible on the screen, animate the hr width
          aboutHr.style.width = "100%";
        } else {
          // If the container is not visible, reset hr width to initial one
          aboutHr.style.width = "100px";
        }
      });
    });

    // Observe the corresponding parent element for each aboutHr
    observer.observe(aboutHr.closest('.about-container, .academic-background'));
  });
});