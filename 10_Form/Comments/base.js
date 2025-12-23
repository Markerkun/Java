<<<<<<< HEAD
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
=======


function AddComment(event){
    event.preventDefault();

    const Comments = document.getElementById("ListOfCommments");

    const form = event.target;
    const Name = form["nameInput"].value;
    const Context = form["TextArea"].value;


    Comments.innerHTML += 
    `<div>
        <p>
            Hi, I'm ${Name}.
            ${Context}
            ${new Date()}
        </p>
    </div>`




}
>>>>>>> 9df5a81eecd534052c01c8cf6b04e4e73211a4e2
