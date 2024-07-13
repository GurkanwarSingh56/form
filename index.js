document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const firstName = document.getElementById("first_name").value.trim();
        const lastName = document.getElementById("last_name").value.trim();
        const fatherName = document.getElementById("father_name").value.trim();
        const motherName = document.getElementById("mother_name").value.trim();
        const email = document.getElementById("email").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const program = document.getElementById("options").value;

        if (!firstName || !lastName || !fatherName || !motherName || !email || !gender || !program) {
            alert("Please fill out all required fields.");
            return;
        }

        const contactPattern = /^[0-9]{10}$/;
        if (!contactPattern.test(contact)) {
            alert("Please enter a valid 10-digit contact number.");
            return;
        }

        
        console.log("Form submitted successfully!");
        form.submit(); 
    });
});
