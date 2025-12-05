// set the year in the footer
var yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// handle the form submit
var form = document.getElementById("leadForm");
var thanks = document.getElementById("thanksMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page refresh

    // very basic check
    var nameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;

    if (nameValue === "" || emailValue === "") {
        thanks.textContent = "Please fill in at least your name and email.";
        thanks.style.color = "red";
        return;
    }

    thanks.style.color = "#16a34a";
    thanks.textContent = "Thank you! We received your info for brand scaling.";

    // clear the form
    form.reset();
});
