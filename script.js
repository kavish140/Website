
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const welcomeButton = document.getElementById('welcomeButton');
    
    // Add click event listener to the button
    welcomeButton.addEventListener('click', function() {
        // Show an alert with a welcome message
        alert('Welcome! Thanks for clicking the button. This is a simple JavaScript alert demonstration.');
    });
    
    // Add some visual feedback when the page loads
    console.log('Personal website loaded successfully!');
    
    // Optional: Add a subtle animation when the page loads
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    // Fade in the container
    setTimeout(() => {
        container.style.transition = 'all 0.6s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});
=======
function greet() {
  alert("Welcome to my GitHub website!");
}
