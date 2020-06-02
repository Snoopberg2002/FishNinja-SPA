import ModalListeners from "./ModalListeners";
import router from "./Router";

export default function HomeListeners() {
    let postsBtn = document.querySelector("#post");
    let postsModal = document.querySelector(".postsTemplate").innerHTML;
    let postLoginBtn = document.querySelector("#postLogin");

    //Search Button
    document.querySelector("#search").addEventListener("click", e => {
        e.preventDefault();
        router.navigate("/Lake");
    }); 

      //Posts Modal Content
      document.querySelector("#post").addEventListener("click", (event) => {
        event.preventDefault();
        toggleModal(postsModal);
        postLoginBtn.addEventListener("click", (event) => {
            event.preventDefault();
            toggleModal(loginModal);
        });
        document.querySelector(".postsForm").addEventListener("submit", e => {
        e.preventDefault();
        CreatePost();
        });
    });

}