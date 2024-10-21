// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('employeeForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const address = document.getElementById('address').value.trim();

        if (validateForm(name, address)) {
            alert('Form submitted successfully!');
            // Add code here to handle the form submission, e.g., send data to the server.
        }
    });

    function validateForm(name, address) {
        if (name === '' || address === '') {
            alert('Name and address fields cannot be empty.');
            return false;
        }
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            alert('Name can only contain letters and spaces.');
            return false;
        }
        if (!/^[a-zA-Z0-9\s,.-]+$/.test(address)) {
            alert('Address can only contain letters, numbers, spaces, commas, periods, and hyphens.');
            return false;
        }
        return true;
    }
});