export default st => `
<section class="searchMain">
    <h1 id="searchHead">Lake Search</h1>
    <form id="searchForm" action="" method="POST">
  
        <label for="searchState">State: </label>
        <select id="searchState" name="searchState" value="searchState">
            <option id="selectState" value="selectState">Select State</option>
            <option id="Iowa" value="Iowa">Iowa</option>
            <option id="Nebraska" value="Nebraska">Nebraska</option>
            <option id="New York" value="New York">New York</option>
            <option id="Tennessee" value="Tennessee">Tennessee</option>
            <option id="Vermont" value="Vermont">Vermont</option>

        </select>

        <label for="searchCounty">County:  </label>
        <input type="text" name="searchCounty" id="searchCounty" placeholder="County Name">
     
        
        <label for="searchSpecies">Species:  </label>
        <select id="searchSpecies" name="searchSpecies" value="searchSpecies">
            <option id="selectSpecies" value="selectSpecies">Select Species (Optional)</option>
        </select>
        <br>
        <input type="submit" value="Search" id="search">
    </form>
    <br>
    <br>
    <table id="searchTable">
        <tr>
            <th>Lake Name</th>
            <th>Species</th>            
        </tr>
    </table>
</section>
`