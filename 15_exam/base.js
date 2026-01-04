const API_KEY = "2904f8e4478281ef322f22f66d9ba31d";
let forecastData;


// ===== UI HELPERS =====
function showTab(tab) {
    // Показуємо або ховаємо блок Today
    today.style.display = tab === 'today' ? 'block' : 'none';
    // Показуємо або ховаємо блок Forecast
    forecast.style.display = tab === 'forecast' ? 'block' : 'none';
    
    // Забираємо клас active з усіх вкладок
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    // Додаємо клас active до вибраної вкладки
    document.querySelectorAll('.tab')[tab === 'today' ? 0 : 1].classList.add('active');
    }
    
    
function searchCity() {
    const city = cityInput.value.trim();
    if (city) loadWeather(city);
    }

// ===== API =====
// Отримання поточної погоди за назвою міста
async function loadWeather(city) {
    try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=uk&appid=${API_KEY}`);
    const data = await res.json();
    
    // Вставляємо назву міста у поле вводу
    cityInput.value = data.name;
    // Виводимо інформацію на вкладці Today
    renderToday(data);
    // Завантажуємо прогноз на 5 днів за координатами
    loadForecast(data.coord.lat, data.coord.lon);} 
    catch {
    // Якщо місто не знайдено — показуємо повідомлення
    today.innerHTML = '<div class="error">Місто не знайдено</div>';
    // Очищаємо вкладку з прогнозом
    forecast.innerHTML = '';}}
    
    

// Отримання прогнозу на 5 днів за координатами
async function loadForecast(lat, lon) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=uk&appid=${API_KEY}`);
    forecastData = await res.json();
    renderForecast();}



// ===== RENDER =====
// Виведення поточної погоди (Today)
function renderToday(data) {
    // Формуємо HTML-код з даними погоди
    today.innerHTML = `
    <div class="block">
    <h2>${data.name} – ${new Date().toLocaleDateString()}</h2>
    <p>${data.weather[0].description}</p>
    <p>Температура: ${data.main.temp} °C (відчувається ${data.main.feels_like} °C)</p>
    <p>Світанок: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} | Захід: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
    </div>`;}
    
// Виведення прогнозу на 5 днів
function renderForecast() {
    // Обʼєкт для групування прогнозу по днях
    const days = {};
    // Проходимо по кожному запису прогнозу
    forecastData.list.forEach(i => {
    // Отримуємо дату (без часу)
    const d = i.dt_txt.split(' ')[0];
    // Якщо дня ще немає — створюємо масив
    if (!days[d]) {
        days[d] = [];
      }
      days[d].push(i);
    });
    
    // Беремо перші 5 днів
    const keys = Object.keys(days).slice(0, 5);

    // Формуємо HTML для короткого прогнозу
    forecast.innerHTML = '<div class="row">' + keys.map((d, i) => {
    const it = days[d][0];
    return `<div class="day ${i === 0 ? 'active' : ''}" onclick="selectDay('${d}')">
    <p>${new Date(d).toLocaleDateString('uk-UA', { weekday: 'short' })}</p>
    <p>${it.main.temp} °C</p>
    <p>${it.weather[0].description}</p>
    </div>`;
    }).join('') + '</div><div id="dayDetails"></div>';
    
    // За замовчуванням показуємо поточний день
    selectDay(keys[0]);}
    
// Виведення погодинного прогнозу для вибраного дня
function selectDay(day) {
    // Забираємо підсвітку з усіх днів
    document.querySelectorAll('.day').forEach(d => d.classList.remove('active'));
    // Підсвічуємо перший день (активний)
    document.querySelectorAll('.day')[0].classList.add('active');
    
    // Фільтруємо прогноз для вибраного дня
    const items = forecastData.list.filter(i => i.dt_txt.startsWith(day));

    // Формуємо HTML погодинного прогнозу
    dayDetails.innerHTML = '<div class="block">' + items.map(i =>
    `<p>${i.dt_txt.split(' ')[1]} – ${i.main.temp} °C (відчувається ${i.main.feels_like} °C), ${i.weather[0].description}</p>`
    ).join('') + '</div>';
    }
   

// ===== INIT =====
// Отримання геолокації користувача
navigator.geolocation.getCurrentPosition(
    // Якщо геолокація доступна — завантажуємо погоду за координатами
    p => loadWeatherByCoords(p.coords.latitude, p.coords.longitude),
    // Якщо ні — завантажуємо погоду для Rivne
    () => loadWeather('Rivne')
    );
    
    // Отримання погоди за координатами
    async function loadWeatherByCoords(lat, lon) {
    // Запит до API поточної погоди за координатами
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=uk&appid=${API_KEY}`);
    const data = await res.json();
    cityInput.value = data.name;
    // Виводимо поточну погоду
    renderToday(data);
    // Завантажуємо прогноз на 5 днів
    loadForecast(lat, lon);
    }