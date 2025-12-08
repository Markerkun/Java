const text = document.getElementById('text');


function ColorChange(event)
{
    const color = event.target.style.backgroundColor;
    text.style.color = color;
}