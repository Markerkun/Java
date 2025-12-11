const getAdvice = document.getElementById("wordInput");

getAdvice.addEventListener("click", async () => {
    const word = document.getElementById("wordInput").value.trim();
    const res = document.getElementById("result");

    if (!word) {
        res.textContent = "Enter a word";
        return;
    }

    const url = `https://api.adviceslip.com/advice/search/${word}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.slips) {
        res.textContent = "No advice found.";
        return;
    }
    res.textContent = data.slips[0].advice;

});
