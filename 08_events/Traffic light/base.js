const Next = document.getElementById('next');
const lights = document.querySelectorAll('.light');
let current = 0;

function changeLight() {
  lights.forEach(light => light.classList.remove('active'));
  lights[current].classList.add('active');
  current = (current + 1) % lights.length;
}

Next.addEventListener('click', changeLight);