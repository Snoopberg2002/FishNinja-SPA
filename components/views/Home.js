const st = () => `
<section class="homeMain">
    <h1 class="heading">Keeping Lines Tight Across America!</h1>
    <div id="map"></div>
    <h2>Lake Search:</h2>
    <form id="searchForm" action="/Search" method="POST">
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
`

export default st;