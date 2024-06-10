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
