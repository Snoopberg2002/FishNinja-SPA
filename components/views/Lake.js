export default st => `
<section class="lakePageMain">
    <h1 id="lakeTitle">This Lake</h1>

    <div id="speciesList">
        <h3 id="speciesHead">Resident Species</h3>
        <h4 id="residentSpecies">These Fish</h4>
    </div>

    <div id="amenities">
        <h3 id="amenitiesHead">Amenities</h3>
        <h4 id="amenities">These Amenities</h4>
    </div>

    <div id="lakeComments">
        <h3 id="commentsHead">Comments:</h3>
    <p id="commentslist"></p>
    </div>

    <div id="lakeMap">

    </div>

    <div id="locationDetails">
        <h4 id="county">County:</h4>
        <h4 id="directions"><a id="directions" href="#">Directions</a></h4>
    </div>

    <img id="contourMap" src="">

    <div id="lakeRules">
        <h4 id="lakeStandards">Lake Standards</h4>
        <ul id="rulesList">
            <li>Boating:</li>
            <li>Boat Launch:</li>
            <li>Ice Fishing:</li>
            <li>Bow Fishing:</li>
        </ul>
        <a id="regulations" href="">Regulations</a>
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