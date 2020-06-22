import { auth, db } from "../firebase";
import * as state from "../store";

export default function SubmitEntry() {
    let entries = db.collection("Entries");
    let species = document.querySelector("#entrySpecies").value;
    let stateInput = document.querySelector("#entryState").value;
    let lake = document.querySelector("#entryLake").value;
    let img = document.querySelector("#entryImage").files[0];
    let description = document.querySelector("#entryDescription").value;
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        entries.add({
            Species: species,
            LakeName: lake,
            LakeState: stateInput,
            Image: reader.result,
            PostedBy: state.User.UserName,
            Description: description,
            TimeAdded: Date.now()
        })
        document.querySelector(".modalBg").classList.remove("bg-active");
    })
    reader.readAsDataURL(img);
}