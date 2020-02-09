var username = "natia";
var password = 123;

document.getElementById('form-submit-btn').addEventListener('click', function() {
    // 1. ამოვიღო ფორმის ელემენტებიდან value-ები
    var form_username = document.getElementById('username').value;
    var form_password = document.getElementById('password').value;

    // 2. შევამოწმო ემთხვევა თუარა მოცემულ username-ს და passwrod-ს
    if(username == form_username && password == form_password) {
        // ფორმა უნდა გაქრეს 
        document.getElementById('form').style.display = 'none';
        document.getElementById('form-message').innerText = "You are Logged in";
    } else {
        //გამოვიტანო შეტყობინება
        document.getElementById('error-message').innerText = "Invalid Username or password";
    }
});