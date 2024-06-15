

import {
    Account
} from '../classes/account.js';
import { users } from '../data/users.js';



window.addEventListener("DOMContentLoaded", (e) => {
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let contactInfo = document.getElementById('contact-info');
    let newPassword = document.getElementById('new-password');
    let birthday = [
        document.getElementById("month-select"), document.getElementById('day-select'), document.getElementById('year-select')
    ];
    let newBirthday = [];
    let gender = [
        document.getElementById('female'), document.getElementById('male'), document.getElementById('custom')
    ];
    let submit = document.getElementById('sign-up');

    //assign values based on user inputs
    firstName.addEventListener('change', (e) => {
        firstName.value = e.target.value;
    });
    lastName.addEventListener('change', (e) => {
        lastName.value = e.target.value;
    });
    contactInfo.addEventListener('change', (e) => {
        contactInfo.value = e.target.value
    });
    newPassword.addEventListener('change', (e) => {
        newPassword.value = e.target.value;
        verifyPassword(newPassword);
    });

    gender.forEach((option) => {
        option.addEventListener('change', (e) => {
            gender.value = e.target.value
        })
    })

    const createBirthday = () => {

        birthday.forEach((element) => {
            element.addEventListener('change', (e) => {
                e.stopPropagation();
                element.value = e.target.value;
                newBirthday.push(element.value)
            })
        })

    }
    createBirthday();


    const verifyPassword = (password) => {
        if(password.value.length < 8) {
            throw new Error("Password must be greater than 8 characters");
        }
        
        return true;
    }

    const verifyUserInputs = () => {

        if(
            firstName.value && lastName.value &&
            contactInfo.value && newPassword.value && (newBirthday.length === 3)
        ) {
            return true;
        }
        return false;
    }


    submit.addEventListener('click', (e) => {
        e.stopPropagation();
        if(verifyUserInputs()) {

            const newUser = new Account(firstName.value, lastName.value, contactInfo.value, newPassword.value, newBirthday,
            gender.value
            );

            newUser.storeNewUser();
            console.log(users);


        }
        else {
            throw new Error("Must provide all values");
        }
    })




})
