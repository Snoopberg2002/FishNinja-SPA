// import { seasons } from "../../lib/SetSeasons";
// console.log(seasons);
export default st => `
<section class="tipsMain">
    <form id="tipsForm" action="#" method="POST">
        <h1 id="tipsHead">Tips from the Pros</h1>
        <br>
        <br>
        <select id="species" name="species">
            <option id="pickSpecies" value="pickSpecies">Select Species</option>
            <option id="bluegill" value="bluegill">Sunfish/Bluegill</option>
            <option id="crappie" value="crappie">Crappie</option>
            <option id="perch" value="perch">Perch</option>
            <option id="smb" value="smb">Smallmouth Bass</option>
            <option id="lmb" value="lmb">Largemouth Bass</option>
            <option id="walleye" value="walleye">Walleye</option>
            <option id="pike" value="pike">Northern Pike</option>
            <option id="muskie" value="muskie">Muskie</option>
        </select>

        <select id="season" name="season">
            <option id="pickSeason" value="pickSeason">Select Season</option>       
        </select>
        <br>

        <input type="submit" value="Select" id="select">
    </form>
    <p id="techniques">Select species and season for tips and techniques.</p>
</section>
`



