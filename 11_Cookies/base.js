

function AddColor()
{
    event.preventDefault(); 

    const form = event.target;

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    
    const Name = document.getElementById("Name").value;
    const Type = document.GetValue("Type").value;
    const Code = document.getElementById("Code").value;
    const Colors = document.getElementById("Colors").value;
    document.cookie = `color=${Code}; path=/;expires=Fri, 31 Dec 2026 23:59:59 GMT`;

    if(Type === "RGB" || Type === "RGBA")
    {
        document.body.style.backgroundColor = `rgb(${Colors})`;
    }
    else if(Type === "HEX")
    {
        document.body.style.backgroundColor = `#${Colors}`;
    }
    else
    {
        alert("Unknown Color Type");
    }

}