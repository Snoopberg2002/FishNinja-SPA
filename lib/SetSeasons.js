

export default function SetSeasons(target, seasons) {

    let seasons7 = `
    <option id="pickSeason" value="pickSeason">Select Season</option>
    <option id="earlyWinter" value="earlyWinter">Early Winter</option>
    <option id="winter" value="winter">Winter</option>
    <option id="earlySpring" value="earlySpring">Early Spring</option>
    <option id="spring" value="spring">Spring</option>
    <option id="summer" value="summer">Summer</option>
    <option id="earlyFall" value="earlyFall">Early Fall</option>
    <option id="fall" value="fall">Fall</option>  
    `;

    let seasons6 = `
    <option id="pickSeason" value="pickSeason">Select Season</option>
    <option id="earlyWinter" value="earlyWinter">Early Winter</option>
    <option id="winter" value="winter">Winter</option>
    <option id="earlySpring" value="earlySpring">Early Spring</option>
    <option id="spring" value="spring">Spring</option>
    <option id="summer" value="summer">Summer</option>
    <option id="fall" value="fall">Fall</option>  
    `

    let seasons4 = `
    <option id="pickSeason" value="pickSeason">Select Season</option>
    <option id="winter" value="winter">Winter</option>
    <option id="spring" value="spring">Spring</option>
    <option id="summer" value="summer">Summer</option>
    <option id="fall" value="fall">Fall</option>  
    `

    let seasons3 = `
    <option id="pickSeason" value="pickSeason">Select Season</option>
    <option id="spring" value="spring">Spring</option>
    <option id="summer" value="summer">Summer</option>
    <option id="fall" value="fall">Fall</option> 
    `

    target.addEventListener("change", e => {
        if (target.value === "bluegill" || target.value === "crappie" || target.value === "walleye" || target.value === "pike") {
            seasons.innerHTML = seasons4;
        }
    
        if (target.value === "smb" || target.value === "muskie") {
            seasons.innerHTML = seasons3;
        }
    
        if (target.value === "perch") {
            seasons.innerHTML = seasons6;
        }
    
        if (target.value === "lmb") {
            seasons.innerHTML = seasons7;
        }
    })
}