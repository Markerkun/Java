const buttons = document.querySelectorAll('.news button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
    btn.parentElement.remove();
});
});