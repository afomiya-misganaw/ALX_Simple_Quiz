document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Main validation function (required by your task)
    function answer() {
        // Get trimmed inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation logic
        let isValid = true;
        const messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters.');
        }

        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Invalid email format.');
        }

        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be 8+ characters.');
        }

        // Display feedback
        feedbackDiv.style.display = 'block';
        feedbackDiv.innerHTML = isValid 
            ? '<span style="color:#28a745">Registration successful!</span>' 
            : messages.map(msg => `<span style="color:#dc3545">${msg}</span>`).join('<br>');

        return isValid; // Returns true/false for external use if needed
    }

    // Form submission handler
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        answer(); // Call the required function
    });
});
