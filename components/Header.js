export default () => `
<header>
    <h3 id="home"><a id="home" href="/Home">Home</a></h3>

    <nav>
        <a href="#" class="about">About</a>
        <a href="#" class="contact">Contact</a>
        <a href="#" class="login">Login/Register</a>
    </nav>

    <h4 class="tips"><a href="/Tips" data-navigo>Tips & Techniques<a></h4>

    <!-- Create Nav Modals -->
    <div class="modalBg">
        <div class="modalContent">

        </div>
        <span id="modal-close">X</span>
    </div>
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
</header>
`