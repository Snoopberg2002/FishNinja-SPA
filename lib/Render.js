import * as state from "../store";
import {Footer, Header, Main} from "../components";
import Controller from "../components/Controller";
// import axios from "axios";
// import { auth, db } from "../firebase";
import { default as ModalListeners } from "./ModalListeners";
import CheckUserStatus from "./CheckUserStatus";
import LogoutListener from "./LogoutListener";
import UserCards from "./UserCards";
import { auth, db } from "../firebase";


function render(st = state.Home, props) {
    document.querySelector("#root").innerHTML= `
    ${Header(st)}
    ${Main(st, props)}
    ${Footer()}
    `;

    Controller(st, props);
    ModalListeners();
    CheckUserStatus();
    LogoutListener(state.User);
    listenForAuthChange();
    UserCards(document.querySelector("#ninjaUsers"));
}

function listenForAuthChange() {

    // log user object from auth if a user is signed in
  
    auth.onAuthStateChanged(user => (user ? console.log(user) : ""));
  
  }

export { render }