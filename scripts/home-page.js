document.querySelector(".js-confirm").addEventListener("click",  () => {
 
  const selectedChoice = document.querySelector('input[name="choice"]:checked');
  console.log(selectedChoice)
  // Sprawdź, czy dokonano wyboru
  if (selectedChoice) {
      const choice = selectedChoice.value;

      // Przekieruj na odpowiednią stron
      if (choice === "business") {
          window.location.href = "business-page.html";
      } else if (choice === "investor") {
          window.location.href = "investor-page.html";
      } else if (choice === "student") {
          window.location.href = "student-page.html";
      }
  } else {
      alert("Please select an option before confirming.");
  }
});
document.querySelector('.js-confirm')