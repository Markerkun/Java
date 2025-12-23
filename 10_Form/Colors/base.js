function addColor() {
    const r = Number(document.getElementById("r").value);
    const g = Number(document.getElementById("g").value);
    const b = Number(document.getElementById("b").value);
    const error = document.getElementById("error");

    error.textContent = "";

    if (
        r < 0 || r > 255 ||
        g < 0 || g > 255 ||
        b < 0 || b > 255)
    {
        error.textContent = "Значення R, G, B повинні бути від 0 до 255!";
        return;
    }

    const card = document.createElement("div");
    card.className = "color-card";

    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    const text = document.createElement("div");
    text.className = "color-text";
    text.textContent = `RGB (${r}, ${g}, ${b})`;

    card.appendChild(box);
    card.appendChild(text);

    document.getElementById("palette").appendChild(card);
  }