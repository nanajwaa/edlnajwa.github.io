// JavaScript Documentdocument.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add 'active' class to the current section link
    const activateNavLink = () => {
        let index = sections.length;
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    };
    
    activateNavLink();
    window.addEventListener('scroll', activateNavLink);
});
