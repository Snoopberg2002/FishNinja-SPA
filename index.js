import { Header, Main, Footer } from "./components";
import { default as Router } from "./lib/Router";
import { default as toggleModal } from "./lib/ToggleModal";
import { default as ModalClose } from "./lib/ModalClose";
// import { default as AddModalListers } from "./lib/AddModalListeners";
import { default as NewsFeed } from "./lib/News";
// import { default as AddListeners } from "./lib/AddListeners";
import { default as CreatePost } from "./lib/Post";
import {default as ModalVars } from "./lib/ModalVars";
// import { default as ModalListeners } from "./lib/ModalListeners";
import { default as Tips } from "./lib/Tips";
import * as state from "./store";
// import Stories from "./news.js";
import Navigo from "navigo";
import { capitalize, round } from "lodash";
// import { initialMap } from "./lib/CreateMap";

function render(st = state.Home) {
    document.querySelector("#root").innerHTML= `
    ${Header()}
    ${Main(st)}
    ${Footer()}
    `
    // ModalListeners();
    // toggleModal();
    ModalClose();
    AddListeners();
    // AddModalListers();
    // NewsFeed();
    Tips();
}

render();
export { render }

// const router = new Navigo(window.location.origin);

// router.on({
//     "/": () => render(state.Home), 
//     ":page": params => {
//       let page = capitalize(params.page);
//       render(state[page]);
//     }});

function AddListeners() {

    //Home Listeners

    if (state.view === home) {
        //Create Posts
        if (document.querySelector(".modalContent").innerHTML === document.querySelector(".postsTemplate").innerHTML) {
            document.querySelector("#createPost").addEventListener("click", e => {
                e.preventDefault();
                CreatePost();
            });
        }

        //Search Button
        document.querySelector("#search").addEventListener("click", e => {
            e.preventDefault();
            render(state.Lake);
        }); 
    }

}

//Create Modals
let activeModal = document.querySelector(".activeModal");
let aboutBtn = document.querySelector(".about");
let aboutModal = document.querySelector(".aboutTemplate").innerHTML;
let contactsBtn = document.querySelector(".contact");
let contactsModal = document.querySelector(".contactsTemplate").innerHTML;
let loginBtn = document.querySelector(".login");
let loginModal = document.querySelector(".loginTemplate").innerHTML;
let newsBtn = document.querySelector(".newsStory");
let newsModal = document.querySelector(".newsTemplate").innerHTML;
let postsBtn = document.querySelector("#post");
let postsModal = document.querySelector(".postsTemplate").innerHTML;
let map = document.querySelector("#map");
let modal = document.querySelector(".modalBg");
let modalContent = document.querySelector(".modalContent");

//About Modal
aboutBtn.addEventListener("click", event => {
    event.preventDefault();
    toggleModal(aboutModal);
});

//Contacts Modal
contactsBtn.addEventListener("click", event => {
    event.preventDefault();
    toggleModal(contactsModal);
    
});

//Login Modal
loginBtn.addEventListener("click", event => {
    event.preventDefault();
    toggleModal(loginModal);
    document.querySelector("#registerLink").addEventListener("click", (e) => {
        e.preventDefault();
        render(state.Register);
      });
});

//Posts Modal
postsBtn.addEventListener("click", event => {
    event.preventDefault();
    toggleModal(postsModal);
    loginBtn.addEventListener("click", (event) => {
        event.preventDefault();
        modal.classList.remove("bg-active");
        toggleModal(loginModal);
    });
});

// //Home Modals
// if ( state.view === "Home") {
//     //Posts Modal
//     postsBtn.addEventListener("click", event => {
//     event.preventDefault();
//     toggleModal(postsModal);
//     loginBtn.addEventListener("click", (event) => {
//         event.preventDefault();
//         modal.classList.remove("bg-active");
//         toggleModal(loginModal);
//       });
//     });

//     //News Modal
// }

