document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("DogImg");
    img.hidden = true;
});


async function SomeNewF(){
    const url = "https://dog.ceo/api/breeds/image/random";
    let response = await fetch (url);
    let data = await response.json();
    const breeds = data.message;
    const p = document.getElementById("p");
    const img = document.getElementById("DogImg");
    img.hidden = false;
     fetch (url)
     .then (response => response.json())
     .then (data => {img.src = data.message})
     .catch(error => (console.log (error)));  
    
    const imageUrl = data.message;
    img.src = imageUrl;

    const parts = imageUrl.split("/");
    const breedPart = parts[parts.indexOf("breeds") + 1];

    const breed = breedPart.replace("-", " ");

    p.textContent = "Breed: " + breed;


    
        

}