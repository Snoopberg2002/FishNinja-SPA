import { render } from "../index";

export default function ModalVars() {
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

    //Close Modals
    document.querySelector("#modal-close").addEventListener("click", e => {
        e.preventDefault();
        modal.classList.remove("bg-active");
        map.classList.remove("mapVisibility");
    });

    //Open/close Modals
    const toggleModal = (content) => {
        modalContent.innerHTML = content;
        modal.classList.add("bg-active");
        map.classList.add("mapVisibility");
    }

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
            // document.querySelector("#registerLink").addEventListener("click", e => {
            //     e.preventDefault();
            //     render(state["Register"]);
            // })
        });
    });

    //News Modal
}