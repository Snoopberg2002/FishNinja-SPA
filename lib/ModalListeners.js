import { default as toggleModal } from "./ToggleModal";

export default function modalListeners() {

  // Modals' Elements
  let activeModal = document.querySelector(".activeModal");
  let aboutBtn = document.querySelector(".about");
  let aboutModal = document.querySelector(".aboutTemplate").innerHTML;
  let contactsBtn = document.querySelector(".contact");
  let contactsModal = document.querySelector(".contactsTemplate").innerHTML;
  let loginBtn = document.querySelector(".login");
  let postLoginBtn = document.querySelector("#postLogin");
  let loginModal = document.querySelector(".loginTemplate").innerHTML;
  let newsBtn = document.querySelector(".newsStory");
  let newsModal = document.querySelector(".newsTemplate").innerHTML;
  let postsBtn = document.querySelector("#post");
  let postsModal = document.querySelector(".postsTemplate").innerHTML;
  let map = document.querySelector("#map");
  let modal = document.querySelector(".modalBg");
  let modalContent = document.querySelector(".modalContent");


  //About Modal Content
  aboutBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleModal(aboutModal);
  });

  //Contacts Modal Content
  contactsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleModal(contactsModal);
  });

  //Login Modal Content
  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleModal(loginModal);
    document.querySelector("#registerLink").addEventListener("click", (e) => {
      e.preventDefault();
      render(state[Register]);
    });
  });

  //Posts Modal Content
  postsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleModal(postsModal);
    postLoginBtn.addEventListener("click", (event) => {
      event.preventDefault();
      toggleModal(loginModal);
      // document.querySelector("#registerLink").addEventListener("click", e => {
      //     e.preventDefault();
      //     render(state["Register"]);
      // })
    });
  });
}
