// JavaScript for the Services Page

// Function to show an alert with the service name
function showServiceDetails(serviceName) {
    alert(`You have selected the ${serviceName} service. Please contact us for more details!`);
}

// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Scroll to the corresponding section smoothly
        const targetId = this.getAttribute('href').substring(1); // Remove the "#" from href
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adding click event to each service item
const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach(item => {
    const serviceName = item.querySelector('h2').textContent; // Get the service name
    item.addEventListener('click', function () {
        showServiceDetails(serviceName); // Show alert with service name
    });
});
