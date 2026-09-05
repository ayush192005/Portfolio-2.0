const hamburger = document.querySelector(".hamburger-icon");
const crossbtn = document.querySelector(".close-icon");
const mobilenav = document.querySelector(".mobile-nav");
const navlink = document.querySelectorAll(".mobile-nav .links");

hamburger.addEventListener("click", () => {
    mobilenav.classList.add("active");
})

crossbtn.addEventListener("click", () => {
    mobilenav.classList.remove("active")
})

navlink.forEach((link) => {
    link.addEventListener("click", () => {
        mobilenav.classList.remove("active");
    })
})
