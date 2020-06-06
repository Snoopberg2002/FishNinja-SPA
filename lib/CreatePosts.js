import axios from "axios";
import { auth, db } from "../firebase";

export default function CreatePosts() {
    class Post {
        constructor(lake, img, comment) {
            this.lake = lake,
            this.img = img,
            this.comment = comment
        }
    }
    
    let posts = [];
    
    function createPost() {
        let lake = document.querySelector("#postLake").value;
        let state = document.querySelector("#postState");
        let img = document.querySelector("#addImage").value;
        let comment = document.querySelector("#addComment").value;
        let newPost = new Post(lake, state, img, comment);
        posts.unshift(newPost);
        console.log(posts);
        db.collection("Posts").add({
            Comment: comment,
            LakeName: lake,
            LakeState: state,
            Image: img
        });
    }
    createPost();

    function addPost() {
        const target = document.querySelector("#newPosts");

        db.collection("userPosts").get()
        .then(console.log(db.collection("userPosts")))
        .then(dbPosts => {
            console.log(dbPosts);
            dbPosts.docs.forEach(item => {
                console.log(item);
            });
        })

        // posts.forEach((post) => {
        //     console.log(post);
        //     const elem = document.createElement("li");
        //     elem.innerHTML = `<a class="newPost" href="#">${post.lake}, ${post.comment}</a>`;
        //     target.appendChild(elem);
        // });
    }
    addPost();
    
}