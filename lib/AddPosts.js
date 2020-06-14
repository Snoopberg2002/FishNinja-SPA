import { auth, db } from "../firebase";
import { default as toggleModal } from "./ToggleModal";

export default function AddPosts() {
    const target = document.querySelector("#newPosts");

    db.collection("userPosts")
    .get()
    .then(res => {
        res.forEach(doc => {
            let post = doc.data();
            const elem = document.createElement("li");
            elem.innerHTML = `<a class="newPost" href="#">(${post.LakeName})-${post.Comment}</a>`;
            target.appendChild(elem);
            elem.addEventListener("click", e => {
                e.preventDefault();
                console.log(post);
                toggleModal(document.querySelector(".newPostTemplate").innerHTML);
                document.querySelector("#newPostImage").src = post.Image;
                document.querySelector("#newPostLake").textContent = post.LakeName;
                document.querySelector("#newPostState").textContent = post.LakeState;
                document.querySelector("#postedBy").textContent = `Posted By:  ${post.UserName}`;
                document.querySelector("#newPostComments").textContent = post.Comment;
            })
        });
    })
}