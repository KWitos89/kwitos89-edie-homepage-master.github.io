const burger = document.querySelector('.btnBurger');
const link = document.querySelector(".firstPage_menu--link");

burger.addEventListener('click', () => {

    burger.classList.toggle("it-active");
    link.classList.toggle("it-active");
});