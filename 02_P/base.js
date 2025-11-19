//1
let array = [];
for(let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100));
}
alert("Generated array: " + array);

//2
console.log("Array elements with their indices:");
array.forEach((el, index) => {
    console.log(`[${index}] - ${el}`);
});

//3
console.log("Elements divisible by 7:");
let flag = false;
for(value of array){
    if(value % 7 === 0)
    {
        flag = true;
        console.log(`Element divisible by 7 is: ${value}`);
    }
}
if(!flag){
    console.log("No elements divisible by 7 found.");
}

//4
console.log("Array sorted in descending order:");
array.sort((a, b) => b-a);

//5
console.log("Inserting 0s in the middle of the array:");
array.splice(array.length/2,array.length, 0,0,0,0,0);

//6
console.log("Removing first three elements of the array:");
array.shift(3);

//7
console.log("Finding pairs of equal elements in the array:");
for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
        if(array[i] == array[j]){
            console.log(`Pair found: [${i}] ${array[i]} = [${j}] ${array[j]}`);
        }
    }
}


//8
console.log("Creating a new array without the first and last elements:");
let an_arr = array.slice(1, array.length - 1);

an_arr.forEach((el, index) => {
    console.log(`[${index}] - ${el}`);
});

//9

let count = 0;
for(let value of array){
    if(value % 2 === 0){
        count++;
    }
}
console.log(`Amount of even numbers in the "array" is: ${count}`);
