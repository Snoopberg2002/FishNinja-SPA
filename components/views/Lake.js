export default st => `
<section class="lakePageMain">
    <h1 id="lakeTitle">This Lake</h1>

    <h2 id="weatherHead">Weather</h2>
    <div id="thisWeather">
        <h4 id="rightNow">Right Now:</h4>
        <h4 id="high">High:</h4>
        <h4 id="low">Low:</h4>
        <h4 id="wind">Wind:</h4>
        <h4 id="humidity">Humidity:</h4>
    </div> 

    <h3 id="tomHead">Tomorrow:</h3>
    <br>
    <h3 id="forecast2"></h3>
    <div id="tomorrow">
        <h5 id="tomHigh">High:</h5>
        <h5 id="tomLow">Low:</h5>
    </div>

    <h3 id="day3Head">Day After:</h3>
    <h3 id="forecast3"></h3>
    <div id="day3">
        <h5 id="day3High">High:</h5>
        <h5 id="day3Low">Low:</h5>
    </div>

    <h3 id="day4Head">And Then:</h3>
    <h3 id="forecast4"></h3>
    <div id="day4">
        <h5 id="day4High">High:</h5>
        <h5 id="day4Low">Low:</h5>
    </div>

    <div id="speciesList">
        <h3 id="speciesHead">Resident Species</h3>
        <h4 id="residentSpecies">These Fish</h4>
    </div>

    <div id="amenities">
        <h3 id="amenitiesHead">Amenities: </h3>
        <p id="amenitiesContent">These Amenities</p>
    </div>

    <div id="lakeComments">
        <h3 id="commentsHead">Comments:</h3>
        <p id="commentsContent"></p>
    </div>

    <div id="lakeMap">

    </div>

    <div id="locationDetails">
        <h4 id="county">County:</h4>
        <h4 id="acres">Acres:</h4>
    </div>

    <div id="directions">
        <h4 id="directionsHead">Directions:</h4>
        <p id="route"></p>
    </div>

    <div id="lakeRules">
        <h4 id="lakeStandards">Lake Standards</h4>
        <ul id="rulesList">
            <li id="boatLaunch">Boat Launch:</li>
            <li id="iceFishing">Ice Fishing:</li>
            <li id="bowFishing">Bow Fishing:</li>
            <li id="access">Access:</li>
        </ul>
        <a id="regulations" href="">Regulations</a>
        <a id="contourMap" href="">Contour Map</a>
    </div>

    <div id="lakePosts">
        <h2 id="lakePostsHead">Lake Posts</h2>
        <ul id="postsList">
            <li>Add Posts</li>
        </ul>
        <input type="submit" name="comment" value="Comment">
    </div>
</section>
`

