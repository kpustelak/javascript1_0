(function () {
  document.getElementById("ex1_button").addEventListener("click", () => {
    document.getElementById("ex1_content").innerHTML += "0,1,2,3,4,5,6,7,8,9";
  });

  const ex2_text = document.getElementById("ex2_text");
  const ex2_content = document.getElementById("ex2_content");

  ex2_text.addEventListener("input", () => {
    const value = ex2_text.value;

    if (value.length !== 9) {
      ex2_content.textContent = "Długość numeru musi być równa 9";
    } else if (/[a-zA-Z]/.test(value)) {
      ex2_content.textContent = "Numer nie może zawierać liter";
    } else if (/[^0-9]/.test(value)) {
      ex2_content.textContent = "Numer nie może zawierać znaków specjalnych";
    } else {
      ex2_content.textContent = "Numer telefonu jest poprawny";
    }
  });
})();
