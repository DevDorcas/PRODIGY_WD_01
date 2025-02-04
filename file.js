const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.navbar nav');

menuBtn.addEventListener('click', () => {
    nav.classList.add('show'); // Show menu
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('show'); // Hide menu
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});