import { auth, db } from "../firebase";
import * as state from "../store";
import toggleModal from "./ToggleModal";

export default function UserBio() {
    let userBtn = document.querySelector("#stateUserName");

    let users = db.collection("Users");

    if (state.User.signedIn) {
        users.where("Email", "==", state.User.UserName)
        .get()
        .then(res => {
            console.log(res);
        })
    }
}