console.log("Hello World");

let num = 52;
console.log("The number is:", num);
console.log("Type of num is:", typeof num)
console.log(`Number plus 10 is: ${num + 10}`)
console.log(`Number plus 11 is: ${num + 11}`)
console.log(`Number plus 12 is: ${num + 12}`)

let email = "caualmail@gmail.com"
console.log(`User email is: ${email}, type of email is: ${typeof email}`)

let isActive = true;
console.log(`Is user active? ${isActive}, type of isActive is: ${typeof isActive}`)

let array = [1, 2, 3, 4, 5];
console.log("Array contents:", array);
console.log("Type of array is:", typeof array);

let summa = function(a, b) {
    console.log("Sum is:", a + b);
}
console.log("Type of summa is:", typeof summa);
summa(5, 10);

array.push(summa);
console.log("Array after pushing function:", array);
array[5](20, 30);

const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(`Index: ${i}, Value: ${numbers[i]}`);
}

for (const num of numbers)
{
    console.log(`Value using for...of: ${num}`);
}

for (const key in numbers )
{
    console.log(`Key using for...in: ${key}`);
}



console.warn("This is a warning message");
console.error("This is an error message");
console.info("This is an informational message");
console.debug("This is a debug message");
console.trace("This is a trace message");
 


if (num > 50) {
    console.log("Number is greater than 50");
}
else if (num === 50) {
    console.log("Number is exactly 50");
}
else {
    console.log("Number is less than 50");
}

(3>2)?console.log("3 is greater than 2"):console.log("3 is not greater than 2");



switch (num) {
    case 50:
        console.log("Number is 50");
        break;
    case 52:
        console.log("Number is 52");
        break;
}



function divide(a,b) {
    if(b === 0) {
        console.log("Cannot divide by zero");
        return;
    }
    return a/b;
}

alert("This is an alert message");
alert("Division result of 10 and 2:     " + divide(10, 2));


let clickedbutton = confirm("Do you want to proceed?");
console.log("User clicked:", clickedbutton);
let userinput = prompt("Please enter your name:", "Guest");
console.log("User input name:", userinput);
document.write("Welcome to the page, " + userinput + "!");
document.title = "Updated Page Title";
