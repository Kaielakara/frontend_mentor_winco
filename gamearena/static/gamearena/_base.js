
const menu = document.querySelector(".menu");
const nav_list = document.querySelector(".nav__list");
const nav_trans = document.querySelector(".nav__trans")

menu.addEventListener("click", () => {
    const aria = menu.getAttribute("aria-expanded")
    if (aria === "true") {
        nav_list.setAttribute("data-visible", true);
        nav_trans.classList.add("nav__trans--active");
    } else {
        nav_list.setAttribute("data-visible", false)
        nav_trans.classList.remove("nav__trans--active");
    }
})


