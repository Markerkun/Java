const form = document.getElementById("messageForm");
const messages = document.getElementById("messages");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const author = document.getElementById("author").value;
  const text = document.getElementById("text").value;

  const li = document.createElement("li");
  li.textContent = author + ": " + text;

  messages.appendChild(li);
  form.reset();
});
