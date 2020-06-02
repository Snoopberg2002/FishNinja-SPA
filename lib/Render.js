import * as state from "../store";
import {Footer, Header, Main} from "../components";
import Controller from "../components/Controller"
import {default as ModalClose} from "./ModalClose";
import { default as ModalListeners } from "./ModalListeners";

function render(st = state.Home) {
    document.querySelector("#root").innerHTML= `
    ${Header(st)}
    ${Main(st)}
    ${Footer()}
    `;

    Controller(st);
    ModalListeners();
    ModalClose();
}

export { render }