const form = document.getElementById("regForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const pass1 = document.getElementById("pass1").value;
      const pass2 = document.getElementById("pass2").value;

      if (pass1 !== pass2) {
        result.textContent = "Паролі не співпадають!";
        result.style.color = "red";
        return;
      }

      result.textContent = `На ${email} надіслано лист із підтвердженням`;
      result.style.color = "green";
    });