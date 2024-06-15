
window.addEventListener("DOMContentLoaded", (e) => {

    const email = document.getElementsByClassName('email')[0];
    const password = document.getElementsByClassName('password')[0];
    const loginButton = document.getElementsByClassName('login-btn')[0];
    const createNewAccount = document.getElementsByClassName('account-btn')[0];





    email.addEventListener('change', (e) => {
        let userEmail = e.target.value;
        if(userEmail.includes('.com'))
        console.log("Email:", userEmail);

    });

    password.addEventListener('change', (e) => {
        let userPassword = e.target.value;
        console.log("Password:", userPassword);
    })

})
