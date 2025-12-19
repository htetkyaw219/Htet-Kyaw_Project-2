// Hamburger menu toggle
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

        // Toggle aria-expanded
        menuButton.setAttribute('aria-expanded', !isOpen);

        // Toggle menu visibility
        menu.classList.toggle('is-open');
    });
}
