const fullDarkModeCheckbox = document.getElementById("full-dark-mode");
const containerDarkModeCheckbox = document.getElementById("container-dark-mode");
const container = document.querySelector(".container");

function updateContainerMode() {
    if (containerDarkModeCheckbox.checked) {
        container.classList.add("dark");
        container.classList.remove("light");
    } else {
        container.classList.remove("dark");
        container.classList.add("light");
    }
}


const fullDark = localStorage.getItem("fullDark") === "true";
const containerDark = localStorage.getItem("containerDark") === "true";

fullDarkModeCheckbox.checked = fullDark;
containerDarkModeCheckbox.checked = containerDark;

if (fullDark) {
    document.body.classList.add("dark");
}
updateContainerMode();

fullDarkModeCheckbox.addEventListener("change", () => {
    document.body.classList.toggle("dark", fullDarkModeCheckbox.checked);

    if (fullDarkModeCheckbox.checked) {
        containerDarkModeCheckbox.checked = true;
        updateContainerMode();
    }

    localStorage.setItem("fullDark", fullDarkModeCheckbox.checked);
    localStorage.setItem("containerDark", containerDarkModeCheckbox.checked);
});

containerDarkModeCheckbox.addEventListener("change", () => {
    updateContainerMode();
    localStorage.setItem("containerDark", containerDarkModeCheckbox.checked);
});