import axios from "axios";
import { auth, db } from "../firebase";
import AddPosts from "./AddPosts";
import * as state from "../store";



export default function CreatePosts() {
    let lake = document.querySelector("#postLake").value;
    let stateInput = document.querySelector("#postState").value;
    let img = document.querySelector("#addImage").value;
    let comment = document.querySelector("#addComment").value;
    
    db.collection("userPosts").add({
        Comment: comment,
        LakeName: lake,
        LakeState: stateInput,
        Image: img,
        PostedBy: state.User.userName
    })
    document.querySelector(".modalBg").classList.remove("bg-active");
    
}


