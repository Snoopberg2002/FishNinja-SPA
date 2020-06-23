import SetBackground from "../../lib/SetBackground";
import { auth, db } from "../../firebase";
import * as state from "../../store";
import toggleModal from "../../lib/ToggleModal";
import SubmitEntry from "../../lib/SubmitEntry";
import SetTable from "../../lib/SetTable";

export default (st) => {
    SetBackground(document.querySelector(".entriesMain"));
    entriesListeners();
    SetTable();

}

function entriesListeners() {
    let entryModal = document.querySelector(".entryTemplate").innerHTML;
    let enter = document.querySelector(".entriesInfoAnchor");
    let submit = document.querySelector("#entryForm");

    enter.addEventListener("click", e => {
        e.preventDefault();
        if (state.User.signedIn === false) {
            alert("Please sign in to submit entry.");
          } else {
            toggleModal(entryModal);
            
            submit.addEventListener("submit", e => {
              e.preventDefault();
              SubmitEntry();
            })
          }
    })
}