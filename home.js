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

    // Post creation and display functionality
    const postForm = document.getElementById("postForm");
    const postType = document.getElementById("postType");
    const eventFields = document.getElementById("eventFields");
    const eventDate = document.getElementById("eventDate");
    const eventName = document.getElementById("eventName");
    const postContent = document.getElementById("postContent");
    const postsList = document.getElementById("postsList");

    postType.addEventListener("change", function () {
        if (postType.value === "event") {
            eventFields.style.display = "block";
        } else {
            eventFields.style.display = "none";
        }
    });

    postForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const post = document.createElement("div");
        post.classList.add("post");

        const orgName = "Save The Snakes"; // This should be dynamic based on the logged-in organization
        const username = "JamieSig02"; // This should be dynamic based on the logged-in user
        const content = postContent.value;
        const eventDateValue = eventDate.value;
        const eventNameValue = eventName.value;

        let postHTML = `<p><strong>${orgName}</strong> (${username}) posted:</p>`;

        if (postType.value === "event") {
            postHTML += `<p><strong>Event Date:</strong> ${eventDateValue}</p>`;
            postHTML += `<p><strong>Event Name:</strong> ${eventNameValue}</p>`;
        }

        postHTML += `<p class="post-content">${content.length > 100 ? content.substring(0, 100) + '...' : content}</p>`;
        if (content.length > 100) {
            postHTML += `<span class="read-more" data-fullcontent="${content}">Read more</span>`;
        }

        post.innerHTML = postHTML;
        postsList.appendChild(post);

        // Clear form after submission
        postForm.reset();
        eventFields.style.display = "none";
    });

    // Handle "Read more" and "Hide" functionality
    postsList.addEventListener("click", function (event) {
        if (event.target.classList.contains("read-more")) {
            const fullContent = event.target.getAttribute("data-fullcontent");
            const postContentElement = event.target.previousElementSibling;
            postContentElement.textContent = fullContent;
            event.target.textContent = "Hide";
            event.target.classList.remove("read-more");
            event.target.classList.add("hide");
        } else if (event.target.classList.contains("hide")) {
            const fullContent = event.target.getAttribute("data-fullcontent");
            const postContentElement = event.target.previousElementSibling;
            postContentElement.textContent = fullContent.substring(0, 100) + '...';
            event.target.textContent = "Read more";
            event.target.classList.remove("hide");
            event.target.classList.add("read-more");
        }
    });
});

