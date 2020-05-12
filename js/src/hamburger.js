
export default class Hamgurger {
    constructor(hamburger) {
        this.hamburger = hamburger;
    }
    burgerMenu(hamburger) {
        let menu = hamburger;
        let button = menu.querySelector(".hamburger-menu__button");
        let links = menu.querySelector(".hamburger-menu__link");
        let overlay = menu.querySelector(".hamburger-menu__overlay");


        button.addEventListener("click", (e) => {
            e.preventDefault();
            toggleMenu();
        });
        [].forEach.call(links, function (el) {
            el.addEventListener("click", () => toggleMenu());
        });
        overlay.addEventListener("click", () => toggleMenu());


        function toggleMenu() {
            menu.classList.toggle("hamburger-menu__active");
            if (menu.classList.contains("hamburger-menu__active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "visible";
            }
        }
    }
}


