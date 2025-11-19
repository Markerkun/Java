//1
let array = [];
for(let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100));
}
alert("Generated array: " + array);

//2
array.array.forEach((el, index) => {
    console.log(`[${index}] - ${el}`);
});

//3
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
array.sort((a, b) => b-a);

//5
array.splice(array.length/2,array.length, 0);

//6
array.shift(3);

//7
for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
        if(array[i] == array[j]){
            console.log(`Pair found: [${i}] ${array[i]} = [${j}] ${array[j]}`);
        }
    }
}


//8
let an_arr = array.slice(1, array.length - 1);

//9
let count = 0;
for(let value of array){
    if(value % 2 === 0){
        count++;
    }
}
