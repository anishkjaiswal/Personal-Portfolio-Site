// Function to change the active class based on scroll position
document.addEventListener('scroll', function() {
    // Get all sections and navigation links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let currentSection = '';

    sections.forEach(section => {
        // Calculate the top position of the section
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the scroll position is within the current section
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');  // Get the ID of the section
        }
    });

    // Remove 'active' class from all links and add to the current section's link
    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');  // Add active class to the corresponding link
        }
    });
});



// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add click event listener for each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent the default anchor click behavior
        event.preventDefault();

        // Get the target section's ID from the href attribute
        const targetSectionID = this.getAttribute('href');
        
        // Scroll to the target section smoothly
        document.querySelector(targetSectionID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
