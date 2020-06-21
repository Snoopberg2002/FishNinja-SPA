import axios from "axios";
import { auth, db } from "../firebase";
import AddPosts from "./AddPosts";
import * as state from "../store";



export default function CreatePosts() {
    let lake = document.querySelector("#postLake").value;
    let stateInput = document.querySelector("#postState").value;
    let img = document.querySelector("#addImage").files[0];
    let comment = document.querySelector("#addComment").value;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        db.collection("userPosts").add({
            Comment: comment,
            LakeName: lake,
            LakeState: stateInput,
            Image: reader.result,
            PostedBy: state.User.userName,
            TimeAdded: Date.now()
        })
        document.querySelector(".modalBg").classList.remove("bg-active");
    })
    reader.readAsDataURL(img);
    
}


