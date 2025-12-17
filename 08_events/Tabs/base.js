document.addEventListener("DOMContentLoaded", () => {
    const base = document.getElementById("base");
    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");

    const buttons = document.querySelectorAll(".panel button");

    function hideAll() {
        base.style.display = "none";
        html.style.display = "none";
        css.style.display = "none";
        js.style.display = "none";
    }

    // стартовий стан
    hideAll();
    base.style.display = "block";

    buttons[0].addEventListener("click", () => {
        hideAll();
        html.style.display = "block";
    });

    buttons[1].addEventListener("click", () => {
        hideAll();
        css.style.display = "block";
    });

    buttons[2].addEventListener("click", () => {
        hideAll();
        js.style.display = "block";
    });
});
