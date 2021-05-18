document.querySelector(".header__burger").addEventListener("click", () => {
    document.querySelector(".header__list").classList.toggle("active");
    document.querySelector(".header__burger span").classList.toggle("active");
    document.querySelector(".header__burger").classList.toggle("active");
    document.querySelector(".header").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
})


if (window.scroll() > 10 + "px") {
    document.querySelector(".header").style.background = "black";
}