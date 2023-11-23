// DECLARATION
const nav = document.querySelector(".top-navigation");
const navToggle = document.querySelector(".nav-toggler");
const topper = document.querySelector("#topper");

// EVENTS
navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("menu-open");
    if (visibility ==="false") {
        nav.setAttribute("menu-open",true);
        navToggle.setAttribute("menu-open",true);
        topper.setAttribute("menu-open",true);
    }   else {
        nav.setAttribute("menu-open",false);
        navToggle.setAttribute("menu-open",false);
        topper.setAttribute("menu-open",false);
    }
})

