

const Apple = document.getElementById('Apple-btn')
const Fish = document.getElementById('Fish-btn')
const Eggs = document.getElementById('Eggs-btn')

const ul = document.getElementById('ul');

Apple.onclick = ()=>{
    ul.innerHTML += 
    `<li>
        <a href="https://www.bbcgoodfood.com/search?q=apple">
            <img src="./pictures/Food_C240-128.png" alt="Apple">
            apple
        </a>
    </li>`;
}
Fish.onclick = ()=>{
    ul.innerHTML += 
    `<li>
        <a href="https://www.bbcgoodfood.com/search?q=fish">
            <img src="./pictures/Food_C205-128.png" alt="Fish">
            fish
        </a>
    </li>`;
}
Eggs.onclick = ()=>{
    ul.innerHTML += 
    `<li>
        <a href="https://www.bbcgoodfood.com/search?q=eggs">
            <img src="./pictures/Food_C203-128.png" alt="Eggs">
            eggs
        </a>
    </li>`;
}
