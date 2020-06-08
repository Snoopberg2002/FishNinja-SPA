export default st => `
<section class="lakePageMain">
    <h1 id="lakeTitle">This Lake</h1>

    <h2 id="weatherHead">Weather</h2>
    <div id="thisWeather">
        <h3 id="rightNow">Right Now:</h3>
        <h3 id="high">High:</h3>
        <h3 id="low">Low:</h3>
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

