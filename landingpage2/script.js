// Function to open the form pop-up
function openForm(formId) {
    document.getElementById(formId).style.display = "block";
}

// Function to close the form pop-up
function closeForm(formId) {
    document.getElementById(formId).style.display = "none";
}

// Event listeners for login and signup buttons
document.getElementById("loginBtn").addEventListener("click", function() {
    openForm("loginForm");
});

document.getElementById("signupBtn").addEventListener("click", function() {
    openForm("signupForm");
});
