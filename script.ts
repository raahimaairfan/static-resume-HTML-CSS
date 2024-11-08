document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
    const skillsList = document.getElementById("skills-list") as HTMLUListElement;
  
    // Initially hide the skills list
    skillsList.style.display = "none";
  
    toggleButton.addEventListener("click", () => {
      if (skillsList.style.display === "none") {
        skillsList.style.display = "block";
        toggleButton.textContent = "Hide Skills";
      } else {
        skillsList.style.display = "none";
        toggleButton.textContent = "Show Skills";
      }
    });
  });
  