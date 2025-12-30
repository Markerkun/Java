const form = document.getElementById('userForm');
const result = document.getElementById('result');

function showResult(data) {
  result.innerHTML = `
    <table>
      <tr><th>Firstname</th><td>${data.firstname}</td></tr>
      <tr><th>Lastname</th><td>${data.lastname}</td></tr>
      <tr><th>Birthday</th><td>${data.birthday}</td></tr>
      <tr><th>Gender</th><td>${data.gender}</td></tr>
      <tr><th>Country</th><td>${data.country}</td></tr>
      <tr><th>City</th><td>${data.city}</td></tr>
      <tr><th>Skills</th><td>${data.skills.join(', ')}</td></tr>
    </table>
  `;
}

// Load data from localStorage on page load
const savedData = localStorage.getItem('userData');
if (savedData) {
  showResult(JSON.parse(savedData));
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const skills = [...document.querySelectorAll('.skills input:checked')]
    .map(cb => cb.value);

  const userData = {
    firstname: firstname.value,
    lastname: lastname.value,
    birthday: birthday.value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    country: country.value,
    city: city.value,
    skills: skills
  };

  localStorage.setItem('userData', JSON.stringify(userData));
  showResult(userData);
});