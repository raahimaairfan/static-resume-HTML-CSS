document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-skills");
    var skillsList = document.getElementById("skills-list");
    // Initially hide the skills list
    skillsList.style.display = "none";
    toggleButton.addEventListener("click", function () {
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block";
            toggleButton.textContent = "Hide Skills";
        }
        else {
            skillsList.style.display = "none";
            toggleButton.textContent = "Show Skills";
        }
    });
});
