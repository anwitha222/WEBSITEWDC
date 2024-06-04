document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // Handle redirection based on login status
    if (isLoggedIn && window.location.pathname.endsWith("home.html")) {
        window.location.href = "home-logged.html";
    } else if (!isLoggedIn && window.location.pathname.endsWith("home-logged.html")) {
        window.location.href = "home.html";
    }

    // Update navigation for the logged-in state
    if (isLoggedIn && document.querySelector(".topnav-right")) {
        document.querySelector(".topnav-right").innerHTML = '<a href="#profile" id="profileButton" class="btn btn-secondary">Profile</a>';
    }

    // Handle login button click on home.html
    const loginButton = document.getElementById("loginButton");
    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "login.html";
        });
    }

    // Handle login form submission on login.html
    const loginSubmit = document.getElementById("loginSubmit");
    if (loginSubmit) {
        loginSubmit.addEventListener("click", function (event) {
            event.preventDefault();
            // Simulate successful login
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "home-logged.html";
        });
    }

    // Handle profile button click on home-logged.html
    const profileButton = document.getElementById("profileButton");
    if (profileButton) {
        profileButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "profile.html";
        });
    }

    // Handle logout button click on profile.html
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.removeItem("isLoggedIn");
            window.location.href = "home.html";
        });
    }

    // Handle RSVP button click when not logged in
    const rsvpButtons = document.querySelectorAll(".event-button");
    rsvpButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            if (!isLoggedIn) {
                event.preventDefault();
                window.location.href = "login.html";
            }
        });
    });

    // Handle login form submission on login.html
    const signUpSubmit = document.getElementById("signUpSubmit");
    if (signUpSubmit) {
        signUpSubmit.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "signup.html";
        });
    }



});


