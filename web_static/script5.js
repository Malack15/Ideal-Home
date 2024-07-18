document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, subject, message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                formMessage.textContent = data.error;
                formMessage.style.color = 'red';
            } else {
                formMessage.textContent = data.message;
                formMessage.style.color = 'green';
                contactForm.reset();
            }
        })
        .catch(error => {
            formMessage.textContent = 'An error occurred. Please try again later.';
            formMessage.style.color = 'red';
        });
    });
});
