export default st => `
<section class="tipsMain">
    <form id="tipsForm" action="#" method="POST">
        <select id="species" name="species">
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
            <option id="earlyWinter" value="earlyWinter">Early Winter</option>
            <option id="winter" value="winter">Winter</option>
            <option id="earlySpring" value="earlySpring">Early Spring</option>
            <option id="spring" value="spring">Spring</option>
            <option id="summer" value="summer">Summer</option>
            <option id="earlyFall" value="earlyFall">Early Fall</option>
            <option id="fall" value="fall">Fall</option>               
        </select>
        <br>

        <input type="submit" value="Select" id="select">
    </form>
    <p id="techniques">Select species and season for tips and techniques.</p>
</section>
`