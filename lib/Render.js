import * as state from "../store";
import {Footer, Header, Main} from "../components";
import Controller from "../components/Controller";
// import axios from "axios";
// import auth from "/firebase";
import { default as ModalListeners } from "./ModalListeners";
function render(st = state.Home) {
    document.querySelector("#root").innerHTML= `
    ${Header(st)}
    ${Main(st)}
    ${Footer()}
    `;

    Controller(st);
    ModalListeners();
    // // register new user from email and password
    // auth.createUserWithEmailAndPassword(email, password);

    // // sign in existing user
    // auth.signInWithEmailAndPassword(email, password);

    // // user sign out
    // auth.signOut(callback);

    // // listen for change in authorization status
    // auth.onAuthStateChanged(user => { console.log(user) });
}

export { render }