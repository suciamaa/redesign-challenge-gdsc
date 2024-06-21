window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 500) {
        navbar.classList.add('glass-nav');
    } else {
        navbar.classList.remove('glass-nav');
    }
});