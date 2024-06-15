
window.addEventListener('DOMContentLoaded', (e) => {



let userBirthday = document.getElementsByClassName('user-birthday')[0];

const generateMonth = () => {
    let months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ]
    let selectMonth = document.createElement('select');
    selectMonth.setAttribute('name', "day");
    selectMonth.setAttribute('id', 'month-select');
    months.forEach((month) => {
        let monthOption = document.createElement('option');
        monthOption.setAttribute('value', month);
        monthOption.innerHTML = month;
        selectMonth.appendChild(monthOption);
    });
    return selectMonth;
}

const generateDay = () => {
    let selectDay = document.createElement('select');
    selectDay.setAttribute('name', "day");
    selectDay.setAttribute('id', 'day-select');
    for(let i = 1; i <= 31; i++) {
        let dayOption = document.createElement('option');
        dayOption.setAttribute('value', i);
        dayOption.innerHTML = i;
        selectDay.appendChild(dayOption);
    }
    return selectDay;
}

const generateYear = () => {
    let selectYear = document.createElement('select');
    selectYear.setAttribute('name', "year");
    selectYear.setAttribute('id', 'year-select');

    for(let i = 1905; i <= 2024; i++) {
        let yearOption = document.createElement('option');
        yearOption.setAttribute('value', i);
        yearOption.innerHTML = i;
        selectYear.appendChild(yearOption);
    }
    return selectYear;
}

     const birthdayOptions = () => {
    userBirthday.appendChild(generateMonth());
   userBirthday.appendChild(generateDay());
   userBirthday.appendChild(generateYear());
}
birthdayOptions();
})
