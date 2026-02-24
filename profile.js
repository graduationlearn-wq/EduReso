document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const inputs = form.querySelectorAll('input:not([type="radio"]), select');

    // Length requirements for each field
    const lengthRequirements = {
        username: { min: 5, max: 25 },
        name: { min: 2, max: 50 },
        email: { min: 5, max: 50 },
        password: { min: 8, max: 30 },
        phone: { min: 10, max: 10 },
        state: { min: 2, max: 50 },
        percentage: { min: 1, max: 3 }
    };

    // Error messages
    const errorMessages = {
        username: 'Username must be between 5 and 25 characters',
        name: 'Name must be between 2 and 50 characters',
        email: 'Email must be between 5 and 50 characters',
        password: 'Password must be between 8 and 30 characters',
        phone: 'Phone number must be exactly 10 digits',
        state: 'State must be between 2 and 50 characters',
        percentage: 'Percentage must be between 1 and 3 digits'
    };

    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateField(this);
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
    
        inputs.forEach(input => {
            const valid = validateField(input);
            if (!valid) {
                isValid = false;
            }
        });
    
        if (isValid) {
            console.log('Form is valid');
            // Uncomment to actually submit the form
            // form.submit();
        }
    });
    

    function validateField(field) {
        const fieldName = field.name;
        clearError(field);
    
        if (!fieldName) return true;
    
        const value = field.value.trim();
        const requirements = lengthRequirements[fieldName];
    
        if (requirements) {
            const length = value.length;
            if (length < requirements.min || length > requirements.max) {
                showError(field, `${fieldName}-error`, errorMessages[fieldName]);
                return false;
            }
        }
    
        return true;
    }
    

    function showError(field, errorId, message) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('visible');
            field.classList.add('error');
        }
    }

    function clearError(field) {
        const fieldName = field.name || field.id;
        const errorElement = document.getElementById(`${fieldName}-error`);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('visible');
            field.classList.remove('error');
        }
    }
});
