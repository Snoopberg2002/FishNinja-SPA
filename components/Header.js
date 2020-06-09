export default () => `
<header>
    <h3 id="home"><a id="home" href="/Home" data-navigo>Home</a></h3>

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
                <h4 class="aboutBody">The Fish Ninja is committed to providing the most complete and comprehensive fishing website available.  It is our ongoing and never ending mission to compile and present any and all information relevant to fishing lakes across the United States.  While it is our intention to remain steadfast in this pledge, we can not do it alone.  It is only through the input and feedback of our users that this site can reach its full potential.  Having all the raw data in the world still only paints part of the picture.  Without boots on the ground to say, this lake's shoreline is packed shoulder to shoulder with anglers every weekend, or there is a major construction project up the road that really has the fish dug in; then we really don't have the whole story.  We, unfortunately, will not be able to visit all of these lakes, which is why we need your help.  Connect with other angler's personally, or post your thoughts for the fishing world to see.  We will do our best to put all comments provided to good use.</h4>
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
                <form action="" method="POST" id="login">
                    <label for="email">Email:</label>
                    <input type="text" name="email" id="email">
                    <br>
                    <label for="pass">Password:</label>
                    <input id="pass" type="password" name="password">
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
                <form class="postsForm" action="https://formspree.io/xbjzoonz" method="POST">
                    <h2 id="createPostHead">CreatePost</h2>
                    <label for="createPostHead" class="postLogin">Must be <a href="/Register" data-navigo class="login" id="postLogin">Logged In </a>to post.</label>
                    <br>
                    <label class="postsEls" for="postLake">Lake Name:</label>
                    <input class="postsEls" type="text" id="postLake" name="postLake" placeholder="Required for image upload.">
                    <br>
                    <label class="postsEls" for="postState">State:</label>
                    <input class="postsEls" type="text" id="postState" name="postState" placeholder="Required for image upload.">
                    <br>
                    <label class="postsEls" for="addImage">Upload Image</label>
                    <input class="postsEls" type="file" accept="image/*" id="addImage" name="addImage" value="addImage">
                    <br>
                    <label class="postsEls" for="addComment">Add Comments</label>
                    <input class="postsEls" type="text" id="addComment" name="addComment" placeholder="Add Text Here">
                    <br>
                    <input class="postsEls" type="submit" id="createPost" name="createPost" value="Create Post">
                </form>
            </section>
        </div>
    </template>

    <!-- New Posts Modal -->
    <template class="newPostTemplate">
        <div class="newPostModal">
            <section class="newPostContent">
                <img src="" id="newPostImage" class="newPostEls">
                <h2 id="newPostLake" class="newPostEls">Lake Name</h2>
                <h3 id="newPostState" class="newPostEls">Lake State</h3> 
                <label for="newPostComments" class="newPostEls">Posted By</label>
                <p id="newPostComments" class="newPostEls">Comments</p>
            </section>
        </div>
    </template>
</header>
`