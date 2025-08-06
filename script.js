// Create an event listener to listen for form submission
document.getElementById("userform").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get the data filled in the form
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    // Reset previous errors
    document.querySelectorAll(".error").forEach(el => {
        el.textContent = "";
        el.style.display = "none";
    });

    let valid = true;

    // Start validating data

    // Validate name received
    if (!/^[A-Za-z]{3,}$/.test(name)) {
        const nameErr = document.getElementById("nameErr");
        nameErr.textContent = "Name should contain at least 3 characters and only alphabetical";
        nameErr.style.display = "block";
        valid = false;
    }

    // Validate phone received
    if (!/^\d{10}$/.test(phone)) {
        const phoneErr = document.getElementById("phoneErr");
        phoneErr.textContent = "Phone number should contain 10 digits";
        phoneErr.style.display = "block";
        valid = false;
    }

    // Validate email received
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        const emailErr = document.getElementById("emailErr");
        emailErr.textContent = "Ensure your email is correct!";
        emailErr.style.display = "block";
        valid = false;
    }

    // Validate address received
    if (address.length < 5) {
        const addressErr = document.getElementById("addressErr");
        addressErr.textContent = "Insufficient address length!";
        addressErr.style.display = "block";
        valid = false;
    }

    // Push confirmation if form is valid
    if (valid) {
        alert("Submitted! Look forward to our newsletters!");
        console.log("Received data:\nName: " + name + "\nPhone: " + phone + "\nEmail: " + email + "\nAddress: " + address);
    }
});
