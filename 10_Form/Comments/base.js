

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