document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Fade-in Animations on Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });

    // 3. Active Navigation State on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                // Remove active class from all
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    sections.forEach(section => {
        navObserver.observe(section);
    });


    // 4. Expandable VEX Logic
    const expandButtons = document.querySelectorAll('.expand-btn');

    expandButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                targetContent.classList.toggle('open');

                // Toggle button text
                const isOpen = targetContent.classList.contains('open');
                btn.innerHTML = isOpen
                    ? 'Hide Details <span style="transform: rotate(180deg)">&#9662;</span>'
                    : 'Show Details <span>&#9662;</span>';
            }
        });
    });

    // 5. Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Basic validation
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            formMessage.textContent = 'Sending...';
            formMessage.className = '';

            try {
                const response = await fetch('/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    formMessage.textContent = 'Message sent successfully!';
                    formMessage.className = 'success';
                    contactForm.reset();
                } else {
                    formMessage.textContent = result.message || 'Failed to send message.';
                    formMessage.className = 'error';
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                formMessage.textContent = 'An error occurred. Please try again later.';
                formMessage.className = 'error';
            }
        });
    }
});
