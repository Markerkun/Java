const API_KEY = "2904f8e4478281ef322f22f66d9ba31d";
let forecastData;


// ===== UI HELPERS =====
function showTab(tab) {
    today.style.display = tab === 'today' ? 'block' : 'none';
    forecast.style.display = tab === 'forecast' ? 'block' : 'none';
    
    
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab')[tab === 'today' ? 0 : 1].classList.add('active');
    }
    
    
function searchCity() {
    const city = cityInput.value.trim();
    if (city) loadWeather(city);
    }

// ===== API =====
async function loadWeather(city) {
    try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=uk&appid=${API_KEY}`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    
    
    cityInput.value = data.name;
    renderToday(data);
    loadForecast(data.coord.lat, data.coord.lon);} 
    catch {
    today.innerHTML = '<div class="error">Місто не знайдено</div>';
    forecast.innerHTML = '';}}
    
    
async function loadForecast(lat, lon) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=uk&appid=${API_KEY}`);
    forecastData = await res.json();
    renderForecast();}

// ===== RENDER =====
function renderToday(data) {
    today.innerHTML = `
    <div class="block">
    <h2>${data.name} – ${new Date().toLocaleDateString()}</h2>
    <p>${data.weather[0].description}</p>
    <p>Температура: ${data.main.temp} °C (відчувається ${data.main.feels_like} °C)</p>
    <p>Світанок: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} | Захід: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
    </div>`;}
    
    
function renderForecast() {
    const days = {};
    forecastData.list.forEach(i => {
    const d = i.dt_txt.split(' ')[0];
    (days[d] ??= []).push(i);
    });
    
    
    const keys = Object.keys(days).slice(0, 5);
    forecast.innerHTML = '<div class="row">' + keys.map((d, i) => {
    const it = days[d][0];
    return `<div class="day ${i === 0 ? 'active' : ''}" onclick="selectDay('${d}')">
    <p>${new Date(d).toLocaleDateString('uk-UA', { weekday: 'short' })}</p>
    <p>${it.main.temp} °C</p>
    <p>${it.weather[0].description}</p>
    </div>`;
    }).join('') + '</div><div id="dayDetails"></div>';
    
    
    selectDay(keys[0]);}
    
    
function selectDay(day) {
    document.querySelectorAll('.day').forEach(d => d.classList.remove('active'));
    document.querySelectorAll('.day')[0].classList.add('active');
    
    
    const items = forecastData.list.filter(i => i.dt_txt.startsWith(day));
    dayDetails.innerHTML = '<div class="block">' + items.map(i =>
    `<p>${i.dt_txt.split(' ')[1]} – ${i.main.temp} °C (відчувається ${i.main.feels_like} °C), ${i.weather[0].description}</p>`
    ).join('') + '</div>';
    }
   

// ===== INIT =====
navigator.geolocation.getCurrentPosition(
    p => loadWeatherByCoords(p.coords.latitude, p.coords.longitude),
    () => loadWeather('London')
    );
    
    
    async function loadWeatherByCoords(lat, lon) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=uk&appid=${API_KEY}`);
    const data = await res.json();
    cityInput.value = data.name;
    renderToday(data);
    loadForecast(lat, lon);
    }