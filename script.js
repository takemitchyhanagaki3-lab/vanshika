document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // Add dynamic floating animation variation to stickers
    const stickers = document.querySelectorAll('.sticker');
    stickers.forEach((sticker, index) => {
        // Randomize float duration for more natural feel
        const randomDuration = 5 + Math.random() * 3;
        sticker.style.animationDuration = `${randomDuration}s`;
    });
});
