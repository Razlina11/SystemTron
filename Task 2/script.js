document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch email and password values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // You can implement your sign-in logic here, like sending a request to a server

    // For demonstration, we'll simply log the values
    console.log('Email:', email);
    console.log('Password:', password);
});
