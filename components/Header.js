export default () => `
<header>
    <h3 id="home"><a id="home" href="/Home">Home</a></h3>

    <nav>
        <a href="#" class="about">About</a>
        <a href="#" class="contact">Contact</a>
        <a href="#" class="login">Login/Register</a>
    </nav>

    <h4 class="tips"><a href="/Tips" data-navigo>Tips & Techniques</a></h4>

    <!-- About Modal -->
    <template class="aboutTemplate">
        <div class="aboutModal">
            <section class="aboutContent">
                <h1 class="aboutHead">About</h1>
                <h4 class="aboutBody">We here at the Fish Ninja are committed to providing in-depth, detailed and accurate information, about fishing areas, to anglers everywhere.  For far too long it has been far too difficult to find valuable details about where to fish and, just as important, what fish species may be present in any given lake to fish for.  We intend to change that.  Furthermore, it is our hope that allowing anglers to connect with one another will provide an even greater opportunity to share knowledge between individuals or with the entire fishing world.  In this ever changing landscape, we shall remain diligent in our approach to gathering, updating, and sharing everything we can find in order to help improve fishing experiences across America.</h4>
            </section>
        </div>
    </template>
    <!-- Contacts Modal -->
    <template class="contactsTemplate">
        <div class="contactsModal">
            <section class="contactsContent">
                <h1>Contacts</h1>
            </section>
        </div>
    </template>
    <!-- Login Modal -->
    <template class="loginTemplate">
        <div class="loginModal">
            <section class="loginContent">
                <form action="index.html" method="POST" id="login">
                    <label for="username">Username:</label>
                    <input type="text" name="username" id="username">
                    <br>
                    <label for="user-pw">Password:</label>
                    <input id="user-pw" type="password" name="user-pw">
                    <h3>Not already a member?  <a href="/Register" id="registerLink" data-navigo>Register  </a></h3>
                    <br>
                    <input id="submit" type="submit" value="Submit">
                </form>
            </section>
        </div>
    </template>

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
                <form class="postsForm" action="#" method="POST">
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
</header>
`