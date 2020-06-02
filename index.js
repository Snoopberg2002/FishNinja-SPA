import { default as router } from "./lib/Router";

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

