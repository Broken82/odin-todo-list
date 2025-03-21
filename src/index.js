import { greeting } from "./greeting";
import { homePage } from "./home";
import { menuPage } from "./menu";
import { aboutPage } from "./about";
import "./styles.css"

document.addEventListener("DOMContentLoaded", () => {
    homePage()

    const container = document.querySelector('#content');

    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const about = document.querySelector("#about")

    home.addEventListener("click", () =>{
        changeCard(homePage)
    });
    menu.addEventListener("click", () =>{
        changeCard(menuPage)
    });
    about.addEventListener("click", () => {
        changeCard(aboutPage)
    })


    function changeCard(tab){   
        container.innerHTML = '';
        tab()

    }

    


})