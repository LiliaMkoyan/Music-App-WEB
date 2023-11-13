// JavaScript code to handle the "Show More" link click event
// document.getElementById('showMoreLink').addEventListener('click', function(e) {
//     e.preventDefault(); // Prevent the default behavior of the link (prevents it from navigating away)

//     // Replace the URL below with the URL of the new page you want to open
//     var newPageURL = 'genres.html';

//     // Open the new page on the same website
//     window.location.href = newPageURL;
// });


const burger = document.querySelector(".burger");
const side_menu = document.querySelector(".side-menu")
const lines = document.querySelectorAll(".lines")
burger.addEventListener("click", () => {
    side_menu.classList.toggle("show")
    lines[0].classList.toggle("shorten")
    lines[2].classList.toggle("shorten2")
})

