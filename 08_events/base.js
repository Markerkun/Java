const html = document.getElementById('html');

const css = document.getElementById('css');

const js = document.getElementById('js');

const base = document.getElementById('base');

document.addEventListener('DOMContentLoaded', () => {
    js.hidden = true;
    css.hidden = true;
    html.hidden = true;
});
//show text areas and others when clicking buttons

base.addEventListener('click', () => {
    js.hidden = false;
    css.hidden = false;
    html.hidden = false;
});

//hide text areas and others when clicking buttons
html.addEventListener('click', () => {
    js.hidden = true;
    css.hidden = true;
});
css.addEventListener('click', () => {
    js.hidden = true;
    html.hidden = true;
}); 
js.addEventListener('click', () => {
    css.hidden = true;
    html.hidden = true;
});


 


