
import {
    users
} from '../data/users.js';

export class Account {
    constructor(firstName, lastName, contactInfo, password, dob, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactInfo = contactInfo;
        this.password = password;
        this.dob = dob;
        this.gender = gender;

    }



    assignId() {
        this.userId = users.length + 1;
    }

     storeNewUser() {
      this.assignId();
        users.push(this)
    }



};
