"use strict";
// Toggle dark mode
let colorSelect = document.getElementById("color");
let codeHighlight = document.getElementById("highlight");
colorSelect.addEventListener("change", function() {
let body = document.querySelector("html");
if (colorSelect.value === "dark") {
    body.setAttribute("data-bs-theme","dark");
    codeHighlight.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css");
} else {
    codeHighlight.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-light.min.css");
    body.setAttribute("data-bs-theme","light");
}
hljs.highlightAll();
});