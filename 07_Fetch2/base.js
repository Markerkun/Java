document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("DogImg");
    img.hidden = true;
});


async function SomeNewF(){
    const url = "https://dog.ceo/api/breeds/image/random";
    const img = document.getElementById("DogImg");
    img.hidden = false;
     fetch (url)
     .then (response => response.json())
     .then (data => {img.src = data.message})
     .catch(error => (console.log (error)));     


}