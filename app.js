const form = document.querySelector("#form");
    
function validateEmail() {
    const inpEmail = document.querySelector("#email");
    const err = document.querySelector("#emailerr");

    // Regular expression for email validation
    const validEmail = /^[A-Za-z\._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/;
    const input = document.querySelector("input");

    if (!inpEmail.value.match(validEmail)) {
        err.innerHTML = "Valid Email Required";
        input.style.backgroundColor = "#ffe8e6";
        input.style.border = "0.5px solid hsl(4, 100%, 67%)";
        inpEmail.style.color = "hsl(4, 100%, 67%)";
        return false; // Return false if email is invalid
    } else {
        return true; // Return true if email is valid
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting by default
    if (validateEmail()) {
        const email = document.querySelector("#email").value
        localStorage.setItem("userEmail", email);
        window.location.href = 'thankyou.html'; // Redirect if email is valid
    }
});