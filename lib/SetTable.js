import toggleModal from "./ToggleModal";

export default function SetTable() {
    let entries = db.collection("Entries");
    
    entries.get()
    .then(res => {
        res.forEach(doc => {
            let table = document.querySelector(".entriesTable");
            let entry = doc.data();
            entry.id = doc.id;
            
            let newRow = document.createElement("tr");
            
            let data = `
            <td>${entry.PostedBy}</td>
            <td>${entry.Species}</td>
            <td>${entry.Lake}</td>
            <td>${entry.State}</td>
            <td><a href="#" class="submissionImage">Image</a></td>
            <td>${entry.Description}</td>
            `
            newRow.innerHTML = data;
            table.appendChild(newRow);

            let entryImage = document.querySelector(".submissionImage");
            let image = `<img src="${entry.Image}"/>`

            entryImage.addEventListener("click", e => {
                e.preventDefault();
                toggleModal(image);
            })
        })
    }
}