let lastScroll = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('-translate-y-full');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('-translate-y-full')) {
        header.classList.add('-translate-y-full');
    } else if (currentScroll < lastScroll && header.classList.contains('-translate-y-full')) {
        header.classList.remove('-translate-y-full');
    }

    lastScroll = currentScroll;
});

const btnMobile = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

btnMobile.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const modal = document.getElementById('privacyModal');

function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}