import { render } from "../index";
import * as state from "/store";

export default function AddListeners() {

    //Create Posts
    if (document.querySelector(".modalContent").innerHTML === document.querySelector(".postsTemplate").innerHTML) {
        document.querySelector("#createPost").addEventListener("click", e => {
                e.preventDefault();
                CreatePost();
                render(state.Home);
        });
    }

    //Search Button
    document.querySelector("#search").addEventListener("click", e => {
        e.preventDefault();
        render(state.Lake);
    }); 

}