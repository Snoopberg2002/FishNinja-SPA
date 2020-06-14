import axios from "axios";
import { auth, db } from "../firebase";
import AddPosts from "./AddPosts";
import * as state from "../store";

export default function CreatePosts() {
    let lake = document.querySelector("#postLake").value;
    let state = document.querySelector("#postState").value;
    let img = document.querySelector("#addImage").value;
    let comment = document.querySelector("#addComment").value;
    
    db.collection("userPosts").add({
        Comment: comment,
        LakeName: lake,
        LakeState: state,
        Image: img
        // UserName: state.User.userName
    });
    // AddPosts();
    
}


