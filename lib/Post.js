export class Post {
    constructor(lake, img, comment) {
        this.lake = lake,
        this.img = img,
        this.comment = comment
    }
}

export let posts = [];

export default function createPost() {
    let lake = document.querySelector("#postLake").textContent;
    let img = document.querySelector("#addImage");
    let comment = document.querySelector("#addComment");
    let newPost = new Post(lake, img, comment);
    posts.unshift(newPost);
    let post = new Post(lake, img, comment);
    posts.unshift(post);
    console.log(posts);
}

