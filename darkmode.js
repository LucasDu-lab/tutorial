"use strict";
// Toggle dark mode
let colorSelect = document.getElementById("color");
colorSelect.addEventListener("change", function() {
let body = document.querySelector("html");
if (colorSelect.value === "dark") {
    body.setAttribute("data-bs-theme","dark");
} else {
    body.setAttribute("data-bs-theme","light");
}
});