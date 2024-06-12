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



   //Handle login form submission on login.html
const loginSubmit = document.getElementById("loginSubmit");
    if (loginSubmit) {
       loginSubmit.addEventListener("click", function (event) {
           event.preventDefault();
           // Simulate successful login
           localStorage.setItem("isLoggedIn", "true");
           //window.location.href = "home-logged.html";

           handleLogIn();

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

        //commented out so i can test - amelia

        // Handle login form submission on login.html
        //const loginSubmit = document.getElementById("loginSubmit");
        //if (loginSubmit) {
          //  loginSubmit.addEventListener("click", function (event) {
            //    event.preventDefault();
                // Simulate successful login
              //  localStorage.setItem("isLoggedIn", "true");
               // window.location.href = "home-logged.html";
            //});
       // }

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

            //commented out so i can test - amelia

            // Handle login form submission on login.html
            //const loginSubmit = document.getElementById("loginSubmit");
            //if (loginSubmit) {
              //  loginSubmit.addEventListener("click", function (event) {
                //    event.preventDefault();
                    // Simulate successful login
                  //  localStorage.setItem("isLoggedIn", "true");
                   // window.location.href = "home-logged.html";
                //});
           // }

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

        // Event listener for "View More Details" buttons
    document.querySelectorAll('.event-button').forEach(button => {
        button.addEventListener('click', function (event) {
            if (event.target.textContent === "View More Details") {
                const eventCard = event.target.closest('.event-card');
                const eventTitle = eventCard.querySelector('h3').textContent;
                const eventWhere = eventCard.querySelector('p:nth-child(2)').textContent;
                const eventWhen = eventCard.querySelector('p:nth-child(3)').textContent;
                const eventSpots = eventCard.querySelector('p:nth-child(4)').textContent;

                // Create a new box for displaying more details
                const detailsContainer = document.getElementById('detailsContainer');
                detailsContainer.innerHTML = ''; // Clear any previous content

                const newBox = document.createElement('div');
                newBox.classList.add('event-card');
                newBox.classList.add('expanded-event-card');
                newBox.innerHTML = `
                    <h3>${eventTitle}</h3>
                    <div class="event-content">
                        <div class="event-description">
                            <p>This is the description of the event.</p>
                        </div>
                        <div class="event-details">
                            <p>${eventWhere}</p>
                            <p>${eventWhen}</p>
                            <p>${eventSpots}</p>
                        </div>
                    </div>
                `;

                detailsContainer.appendChild(newBox);

                // Scroll to the details container
                detailsContainer.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

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

        function handleSignUp() {
            const userType = document.querySelector('input[name="Login"]:checked').value;
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const passwordConfirm = document.getElementById('passwordConfirm').value;

            if (!email.includes('@')) {
                alert('Email must contain @');
                return;
            }

            if (password !== passwordConfirm) {
                alert('Passwords do not match');
                return;
            }

            const data = { userType, firstName, lastName, email, password };

            fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then(result => {
                if (result.success) {
                    if (userType === 'volunteer') {
                        window.location.href = 'profile.html';
                    } else if (userType === 'organiser') {
                        window.location.href = 'profile-org.html';
                    }
                } else {
                    alert('Sign up failed: ' + (result.message || 'Unknown error'));
                }
            }).catch(error => {
                alert('An error occurred: ' + error.message);
            });
        }

        function handleGoogleSignUp(googleUser) {
            var profile = googleUser.getBasicProfile();
            var id_token = googleUser.getAuthResponse().id_token;

            var userType = prompt('Are you signing up as a volunteer or an organiser?').toLowerCase();
            var firstName = profile.getGivenName();
            var lastName = profile.getFamilyName();
            var email = profile.getEmail();

            var data = { userType, firstName, lastName, email, id_token };

            fetch('/google-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then(result => {
                if (result.success) {
                    if (userType === 'volunteer') {
                        window.location.href = 'profile.html';
                    } else if (userType === 'organiser') {
                        window.location.href = 'profile-org.html';
                    }
                } else {
                    alert('Sign up failed: ' + (result.message || 'Unknown error'));
                }
            }).catch(error => {
                alert('An error occurred: ' + error.message);
            });
        }

        function onSignIn(googleUser) {
            handleGoogleSignUp(googleUser);
        }

        function signOut() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
                localStorage.removeItem("isLoggedIn");
                window.location.href = "home.html";
            });
        }



        // Initialize Google Sign-In for pop-up mode
        function initGoogleSignIn() {
            gapi.load('auth2', function() {
                gapi.auth2.init({
                    client_id: '718738535802-lfou3menqlvuepch1qa43q6of6492uqk.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                }).then(function(auth2) {
                    auth2.attachClickHandler('g-signin2', {}, onSignIn, function(error) {
                        console.error(JSON.stringify(error, undefined, 2));
                    });
                });
            });
        }

        document.addEventListener("DOMContentLoaded", function() {
            initGoogleSignIn();
        });


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

    function handleSignUp() {
        const userType = document.querySelector('input[name="Login"]:checked').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('passwordConfirm').value;

        if (!email.includes('@')) {
            alert('Email must contain @');
            return;
        }

        if (password !== passwordConfirm) {
            alert('Passwords do not match');
            return;
        }

        const data = { userType, firstName, lastName, email, password };

        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(result => {
            if (result.success) {
                if (userType === 'volunteer') {
                    window.location.href = 'profile.html';
                } else if (userType === 'organiser') {
                    window.location.href = 'profile-org.html';
                }
            } else {
                alert('Sign up failed: ' + (result.message || 'Unknown error'));
            }
        }).catch(error => {
            alert('An error occurred: ' + error.message);
        });
    }

    function handleGoogleSignUp(googleUser) {
        var profile = googleUser.getBasicProfile();
        var id_token = googleUser.getAuthResponse().id_token;

        var userType = prompt('Are you signing up as a volunteer or an organiser?').toLowerCase();
        var firstName = profile.getGivenName();
        var lastName = profile.getFamilyName();
        var email = profile.getEmail();

        var data = { userType, firstName, lastName, email, id_token };

        fetch('/google-signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(result => {
            if (result.success) {
                if (userType === 'volunteer') {
                    window.location.href = 'profile.html';
                } else if (userType === 'organiser') {
                    window.location.href = 'profile-org.html';
                }
            } else {
                alert('Sign up failed: ' + (result.message || 'Unknown error'));
            }
        }).catch(error => {
            alert('An error occurred: ' + error.message);
        });
    }

    function onSignIn(googleUser) {
        handleGoogleSignUp(googleUser);
    }

    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
            localStorage.removeItem("isLoggedIn");
            window.location.href = "home.html";
        });
    }



    // Initialize Google Sign-In for pop-up mode
    function initGoogleSignIn() {
        gapi.load('auth2', function() {
            gapi.auth2.init({
                client_id: '718738535802-lfou3menqlvuepch1qa43q6of6492uqk.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
            }).then(function(auth2) {
                auth2.attachClickHandler('g-signin2', {}, onSignIn, function(error) {
                    console.error(JSON.stringify(error, undefined, 2));
                });
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        initGoogleSignIn();
    });


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

function handleLogIn() {
    console.log('working :)');
}

/* function handleSignUp() {
    console.log('hadnleSIGNUP function called');
    const userType = document.querySelector('input[name="Login"]:checked').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;

    if (!email.includes('@')) {
        alert('Email must contain @');
        return;
    }

    if (password !== passwordConfirm) {
        alert('Passwords do not match');
        return;
    }

    const data = { userType, firstName, lastName, email, password };

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(result => {
        if (result.success) {
            if (userType === 'volunteer') {
                window.location.href = 'profile.html';
            } else if (userType === 'organiser') {
                window.location.href = 'profile-org.html';
            }
        } else {
            alert('Sign up failed: ' + (result.message || 'Unknown error'));
        }
    }).catch(error => {
        alert('An error occurred: ' + error.message);
    });
} */

function handleGoogleSignUp(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;

    var userType = prompt('Are you signing up as a volunteer or an organiser?').toLowerCase();
    var firstName = profile.getGivenName();
    var lastName = profile.getFamilyName();
    var email = profile.getEmail();

    var data = { userType, firstName, lastName, email, id_token };

    fetch('/google-signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(result => {
        if (result.success) {
            if (userType === 'volunteer') {
                window.location.href = 'profile.html';
            } else if (userType === 'organiser') {
                window.location.href = 'profile-org.html';
            }
        } else {
            alert('Sign up failed: ' + (result.message || 'Unknown error'));
        }
    }).catch(error => {
        alert('An error occurred: ' + error.message);
    });
}

function onSignIn(googleUser) {
    handleGoogleSignUp(googleUser);
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        localStorage.removeItem("isLoggedIn");
        window.location.href = "home.html";
    });
}



// Initialize Google Sign-In for pop-up mode
function initGoogleSignIn() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: '718738535802-lfou3menqlvuepch1qa43q6of6492uqk.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
        }).then(function(auth2) {
            auth2.attachClickHandler('g-signin2', {}, onSignIn, function(error) {
                console.error(JSON.stringify(error, undefined, 2));
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    initGoogleSignIn();
});
