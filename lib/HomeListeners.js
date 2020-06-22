import ModalListeners from "./ModalListeners";
import router from "./Router";
import { default as toggleModal } from "./ToggleModal";
import CreatePosts from "./CreatePosts";
import * as state from "../store";
import SubmitEntry from "./SubmitEntry";

export default function HomeListeners() {
    let postsBtn = document.querySelector("#post");
    let postsModal = document.querySelector(".postsTemplate").innerHTML;
    let postLoginBtn = document.querySelector("#postLogin");
    let submit = document.querySelector("#entryForm");
    let post = document.querySelector(".postsForm");
    let entryModal = document.querySelector(".entryTemplate").innerHTML;
    let enter = document.querySelector("#submitEntry");
    let addPost = document.querySelector("#post");

      //Posts Modal 
      addPost.addEventListener("click", (event) => {
        event.preventDefault();
        toggleModal(postsModal);
          
        document.querySelector(".postsForm").addEventListener("submit", e => {
          e.preventDefault();
          CreatePosts();
        });
        // if (state.User.signedIn === false) {
        //   alert("Please sign in to create a post.");
        // } else {
        //   toggleModal(postsModal);
          
        //   document.querySelector(".postsForm").addEventListener("submit", e => {
        //     e.preventDefault();
        //     CreatePosts();
        //     });
        // }
      });

      
      //Entry Modal
      enter.addEventListener("click", event => {
        event.preventDefault();
        if (state.User.signedIn === false) {
          alert("Please sign in to submit entry.");
        } else {
          toggleModal(entryModal);
          
          document.querySelector("#entryForm").addEventListener("submit", e => {
            e.preventDefault;
            SubmitEntry();
          })
        }
      });

}