// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const demoForm = document.getElementById('demoForm');
    
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const clinicName = document.getElementById('clinicName').value;
            const companyEmail = document.getElementById('companyEmail').value;
            const mobile = document.getElementById('mobile').value;
            const clinicLocation = document.getElementById('clinicLocation').value;
            
            // Here you would typically send this data to a server
            console.log('Form submitted with:', {
                clinicName,
                companyEmail,
                mobile,
                clinicLocation
            });
            
            // Show success message
            alert('Thank you for scheduling a demo! We will contact you soon.');
            
            // Reset the form
            this.reset();
        });
    }
    
    // Animation for benefit cards on scroll
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    // Simple animation on scroll
    function checkScroll() {
        benefitCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize card styles
    benefitCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check on load and scroll
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Optional: Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});