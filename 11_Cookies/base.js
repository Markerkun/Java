document.addEventListener("DOMContentLoaded", () => {

    const colorNameInput = document.getElementById("colorName");
    const colorTypeSelect = document.getElementById("colorType");
    const colorCodeInput = document.getElementById("colorCode");
    const colorsContainer = document.getElementById("colorsContainer");

    function updatePlaceholder() {
        const type = colorTypeSelect.value;

        if (type === "RGB") {
            colorCodeInput.placeholder = "176, 224, 230";
        } 
        else if (type === "RGBA") {
            colorCodeInput.placeholder = "176, 224, 230, 0.5";
        } 
        else if (type === "HEX") {
            colorCodeInput.placeholder = "#b0e0e6";
        }
    }

    function isValidRGB(code) {
        const parts = code.split(",").map(p => p.trim());
        if (parts.length !== 3) return false;

        return parts.every(n => {
            const num = Number(n);
            return Number.isInteger(num) && num >= 0 && num <= 255;
        });
    }

    function isValidRGBA(code) {
        const parts = code.split(",").map(p => p.trim());
        if (parts.length !== 4) return false;

        const [r, g, b, a] = parts.map(Number);

        return (
            isInteger(r) && r >= 0 && r <= 255 &&
            isInteger(g) && g >= 0 && g <= 255 &&
            isInteger(b) && b >= 0 && b <= 255 &&
            a >= 0 && a <= 1
        );
    }

    function isValidHEX(code) {
        return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(code);
    }

    window.addColor = function () {
        const name = colorNameInput.value.trim();
        const type = colorTypeSelect.value;
        const code = colorCodeInput.value.trim();

        if (!name || !code) {
            alert("Complete all fields");
            return;
        }

        let cssColor = "";
        let valid = false;

        if (type === "RGB") {
            valid = isValidRGB(code);
            cssColor = `rgb(${code})`;
        } 
        else if (type === "RGBA") {
            valid = isValidRGBA(code);
            cssColor = `rgba(${code})`;
        } 
        else if (type === "HEX") {
            valid = isValidHEX(code);
            cssColor = code;
        }

        if (!valid) {
            alert(`Invalid type ${type}`);
            return;
        }

        const card = document.createElement("div");
        card.className = "color-card";
        card.style.background = cssColor;

        card.innerHTML = `
            <div class="color-info">
                <strong>${name.toUpperCase()}</strong><br>
                ${type}<br>
                ${code}
            </div>
        `;

        colorsContainer.appendChild(card);

        colorNameInput.value = "";
        colorCodeInput.value = "";
    };

    colorTypeSelect.addEventListener("change", updatePlaceholder);
    updatePlaceholder();

});