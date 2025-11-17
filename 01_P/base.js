//1
console.log("Hello World");
let a = +prompt("Enter a num 'a':  ");
let b = +prompt("Enter a num 'b':  ");


(a>b)?alert("a is greater than b"):alert("b is greater than a");

//2 calculator
let operator = prompt("Enter operator (+, -, *, /): ");
let result;
switch(operator) {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        if(b === 0) {
            alert("Cannot divide by zero");
            break;
        }
        result = a / b;
        break;
    default:
        alert("Invalid operator");
        break;
}

alert("Result: " + result);

//3 moudule
let num = +prompt("Enter a number to find its module: ");
if(num < 0) {
    num = -num;
}
alert("Module of the number is: " + num);

//4 amount of ays in year

let year = +prompt("Enter a year to find an amount of days: ");

if(year % 4 === 0 && year % 100 !== 0) {
    alert("Amount of days in the year is 366");
}
else {
    alert("Amount of days in the year is 365");
}

//next date
let day = +prompt("Enter day: ");
let month = +prompt("Enter month: ");
let year1 = +prompt("Enter year: ");
let daysInMonth;

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0);
}
function getDaysInMonth(month, year) {
    if (month%2 != 0)
    {
        return 31;
    }
    else if (month === 2)
    {
        return isLeapYear(year) ? 29 : 28;
    }
    else
    {
        return 30;
    }
}
daysInMonth = getDaysInMonth(month, year1);
if(day < daysInMonth) {
    day++;
}
else {
    day = 1;
    if(month < 12) {
        month++;
    }
    else {
        month = 1;
        year1++;
    }
}

alert(`Next date is: ${day}/${month}/${year1}`);