export default st => `
<section class="searchMain">
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

    <table>
        <tr>
            <th>Lake Name</th>
            <th>Distance</th>            
        </tr>
        <tr>
            <td>Favorite Lake</td>
            <td>15 miles</td>
        </tr>
    </table>
</section>
`