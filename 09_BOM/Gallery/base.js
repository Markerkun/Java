const left = document.getElementById('left');
const right = document.getElementById('right');
const img = document.getElementById('img');

let Images = ["./Images/1.png", "./Images/2.png", "./Images/3.png"];

let currentIndex = 0;

left.addEventListener('click', () => {
    console.log(currentIndex);
    console.log(img.src);
    
    if(currentIndex === 0){
        left.disabled = true;
        right.disabled = false;
    } 
    else {
        right.disabled = false;
        left.disabled = false;
        currentIndex--;
        img.src = Images[currentIndex];
    }
});
right.addEventListener('click', () => {
    console.log(currentIndex);
    console.log(img.src);

    if(currentIndex === 2){
        right.disabled = true;
        left.disabled = false;
    } 
    else {
        left.disabled = false;
        right.disabled = false;
        currentIndex++;
        img.src = Images[currentIndex];
    }
});
