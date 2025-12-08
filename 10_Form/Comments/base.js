const up = document.getElementById('up');
const down = document.getElementById('down');
const DivNum = document.getElementById('number');
let num = 0;

up.addEventListener('click', () => {
    num++;
    DivNum.innerText = num;
});
down.addEventListener('click', () => {
    num--;
    DivNum.innerText = num;
});