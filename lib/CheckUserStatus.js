import { auth, db } from "../firebase";
import { render } from "./Render";
import * as state from "../store";

export default function CheckUserStatus() {
    console.log(state.User.signedIn);
    console.log(state.User);
    // if (state.User.signedIn === false) {
    //     document.querySelector("#userLogout").style.visibility = "hidden";
    // } else {
    //     document.querySelector("#stateUserName").textContent = state.User.userName;
    // }
}