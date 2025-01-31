const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#064F60';
        link.style.transition = '0.3s';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '';
    });
});
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline';
});

closeBtn.addEventListener('click', () => {
    navbar.style.display = 'none';
    menuBtn.style.display = 'inline';
    closeBtn.style.display = 'none';
});