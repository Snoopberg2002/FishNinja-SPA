import ModalListeners from "./ModalListeners";
import router from "./Router";
import { default as toggleModal } from "./ToggleModal";
import CreatePosts from "./CreatePosts";

export default function HomeListeners() {
    let postsBtn = document.querySelector("#post");
    let postsModal = document.querySelector(".postsTemplate").innerHTML;
    let postLoginBtn = document.querySelector("#postLogin");

    //Search Button
    document.querySelector("#search").addEventListener("click", e => {
        e.preventDefault();
        // router.navigate("/Lake");
        window.location.href=window.location.origin+"/Lake";
    }); 

      //Posts Modal Content
      document.querySelector("#post").addEventListener("click", (event) => {
        event.preventDefault();
        toggleModal(postsModal);
        
        document.querySelector(".postsForm").addEventListener("submit", e => {
        e.preventDefault();
        CreatePosts();
        window.location.reload();
        });

        // postLoginBtn.addEventListener("click", (event) => {
        //     event.preventDefault();
        //     toggleModal(loginModal);
        // });

    });

}