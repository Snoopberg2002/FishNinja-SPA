export default st => `
<section class="registerMain">
    <form id="registerForm" action="" method="POST">
        <label class="registerEls" for="homeCity">Home City:</label>
        <input type="text" name="homeCity" class="registerEls" id="homeCity">
        <br>
        <label class="registerEls" for="homeState">Home State:</label>
        <input type="text" name="homeState" class="registerEls" id="homeState">
        <br>
        <label class="registerEls" for="favLake">Favorite Lake:</label>
        <input type="text" name="favLake" class="registerEls" id="favLake">
        <br>
        <label for="gender" class=""registerEls>Gender:</label>
        <select id="gender" name="gender">
            <option id="male" value="male">Male</option>
            <option id="female" value="female">Female</option>
        </select>
        <br>
        <label class="registerEls" for="email">Email Address:</label>
        <input type="email" name="email" class="registerEls" id="email" placeholder="user@anyEmail.com">
        <br>
        <label class="registerEls" for="userName">Username:</label>
        <input type="text" name="userName" class="registerEls" id="userName">
        <h5 class="registerEls">Password must be at least 8 characters with at least one number.</h5>
        <br>
        <label class="registerEls" for="pass">Password:</label>
        <input type="password" name="pass" class="registerEls" id="pass">
        <br>
        <label class="registerEls" for="verPass">Verify Password:</label>
        <input type="password" name="verPass" class="registerEls" id="verPass">
        <br>
        <input type="submit" value="Register" class="registerEls" id="register">
    </form>
</section>
`