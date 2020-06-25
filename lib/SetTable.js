import toggleModal from "./ToggleModal";
import { auth, db } from "../firebase";

export default function SetTable() {
    let entries = db.collection("Entries");
    
    entries
    .orderBy("TimeAdded", "desc")
    .get()
    .then(res => {
        res.forEach(doc => {
            let table = document.querySelector(".entriesTable");
            let entry = doc.data();
            entry.id = doc.id;
            
            let newRow = document.createElement("tr");
            
            let data = `
            <td>${entry.PostedBy}</td>
            <td>${entry.Species}</td>
            <td>${entry.LakeName}</td>
            <td>${entry.LakeState}</td>
            <td><a href="#" data-image="${entry.Image}" class="submissionImage">Image</a></td>
            <td>${entry.Description}</td>
            `
            newRow.innerHTML = data;
            table.appendChild(newRow);
        })
        document.querySelectorAll(".submissionImage").forEach(post => {
            post.addEventListener("click", event => {
                event.preventDefault();
                let image = `<img src="${post.dataset.image}" width="700px" height="auto"/>`
                toggleModal(image);
            })
        })
    })
}