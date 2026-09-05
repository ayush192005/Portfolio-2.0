const hamburger = document.querySelector(".hamburger-icon");
const crossbtn = document.querySelector(".close-icon");
const bodyblock = document.querySelector(".open-nav")
const mobilenav = document.querySelector(".mobile-nav");
const navlink = document.querySelectorAll(".mobile-nav .links");
const contactpage = document.querySelector(".contact-page");
const contactbtn = document.querySelectorAll(".footer-btns .contact-btn")

hamburger.addEventListener("click", () => {
    mobilenav.classList.add("active");
    document.body.classList.add("open-nav");
})

crossbtn.addEventListener("click", () => {
    mobilenav.classList.remove("active");
    document.body.classList.remove("open-nav");
})

navlink.forEach((link) => {
    link.addEventListener("click", () => {
        mobilenav.classList.remove("active");
    })
})
contactbtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        contactpage.classList.add("active");
        console.log("helo");
        
    });
});
