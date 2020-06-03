export class Post {
    constructor(lake, img, comment) {
        this.lake = lake,
        this.img = img,
        this.comment = comment
    }
}

export let posts = [];

export function createPost() {
    let lake = document.querySelector("#postLake").value;
    let img = document.querySelector("#addImage").value;
    let comment = document.querySelector("#addComment").value;
    let newPost = new Post(lake, img, comment);
    posts.unshift(newPost);
    let post = new Post(lake, img, comment);
    posts.unshift(post);
    console.log(posts);
}

