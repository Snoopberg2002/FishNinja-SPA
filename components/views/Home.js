export default () => `
<section class="homeMain">
    <h1 class="heading">Keeping Lines Tight Across America!</h1>
    <div id="map"></div>
    <h2>Lake Search:</h2>
    <form id="searchForm" action="./search.html" method="POST">
        <section id="location">
            <label for="location" id="location">City, State:  </label>
            <input type="text" name="location" id="location" value="location" placeholder="Login for location">
        </section>
        <br>

        <label for="distance">Distance:</label>
        <section id="distance">
            <input type="radio" class="search" id="any" name="choice" value="any" checked>
            <label for="any">25 miles</label>
                
            <input type="radio" class="search" id="public" name="choice" value="public">
            <label for="public">50 miles</label>
                
            <input type="radio" class="search" id="private" name="choice" value="private">
            <label for="private">100 miles</label>
        </section>

        <section id="species">
            <label>Species:  </label>
            <input type="text" name="species" value="species" placeholder="Optional">
        </section>

        <input type="submit" value="Search" id="search">
    </form>

    <div class="news">
        <h3 id="newsHead">Fishing News</h3>
        <ul id="news">
            
        </ul>
    </div>

    <div class="posts">
        <h3 id="posts">Recent Posts</h3>
        <ul>
            <li>Goose Takeover in Benton Park!</li>
            <li>Where's the fish?</li>
        </ul>
        <input type="submit" value="AddComment/UploadImage" class="post" id="post">
    </div>
</section>

<!-- News Modal -->
<template class="newsTemplate">
    <div class="newsModal">
        <section class="newsContent">
            <img src="" alt="https://i.imgur.com/cJsy8d1.jpg" id="storyImage>
            <h2 id="title">Title</h2>
            <h4 id="author">Author</h4>
            <a href="" id="storyLink">Link to Page</a>
            <br>
            <p id="story">Content</p>
        </section>
    </div>
</template>

<!-- Posts Modal -->
<template class="postsTemplate">
    <div class="postsModal">
        <section class="postsContent">
            <form class="postsForm" action="./index.html" method="POST">
                <h2 id="createPostHead">CreatePost</h2>
                <label for="createPostHead" class="postLogin">Must be <a href="/Register" data-navigo class="login" id="postLogin">Logged In </a>to post.</label>
                <br>
                <label class="postsEls" for="postLake">Lake Name:</label>
                <input class="postsEls" type="text" id="postLake" name="postLake" placeholder="Required for image upload.">
                <br>
                <label class="postsEls" for="addImage">Upload Image</label>
                <input class="postsEls" type="file" id="addImage" name="addImage" value="addImage">
                <br>
                <label class="postsEls" for="addComment">Add Comments</label>
                <input class="postsEls" type="text" id="addComment" name="addComment" placeholder="Add Text Here">
                <br>
                <input class="postsEls" type="submit" id="createPost" name="createPost" value="Create Post">
            </form>
        </section>
    </div>
</template>
`