


async function SomeNewF(){
    const url = "https://api.adviceslip.com/advice/search/advice";
    
    
    fetch (url)
    .then (response => response.json())
    .then (data => {console.log (data)})
    .catch(error => (console.log (error)));

    
    // const p = document.getElementById("p");
    // const img = document.getElementById("DogImg");
    // img.hidden = false;

    // const parts = imageUrl.split("/");
    // const breedPart = parts[parts.indexOf("breeds") + 1];
    // const breed = breedPart.replace("-", " ");

    // p.textContent = "Breed: " + breed;


    
        

}