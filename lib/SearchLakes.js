import { db } from "../firebase";

export default function SearchLakes(target) {
    let state = document.querySelector("#searchState");
    let county = document.querySelector("#searchCounty");
    let searchSpecies = document.querySelector("#searchSpecies");
    let lakes = db.collection("FishingLakes");
    let choiceLakes = [];

    let vermont = `
    <option id="selectSpecies" value="selectSpecies">Select Species (Optional)</option>
    <option id="Bowfin" value="Bowfin">Bowfin</option>
    <option id="Carp" value="Carp">Carp</option>
    <option id="ChannelCatfish" value="ChannelCatfish">Channel Catfish</option>
    <option id="WhiteCrappie" value="WhiteCrappie">White Crappie</option>
    <option id="LongnoseGar" value="LongnoseGar">Longnose Gar</option>
    <option id="Muskellunge" value="Muskellunge">Muskie</option>
    <option id="WhitePerch" value="WhitePerch">White Perch</option>
    <option id="AmericanShad" value="AmericanShad">American Shad</option>
    <option id="Sheepshead" value="Sheepshead">Sheepshead</option>
    <option id="LakeWhitefish" value="LakeWhitefish">Lake Whitefish</option>
    <option id="BrookTrout" value="BrookTrout">Brook Trout</option>
    <option id="BrownTrout" value="BrownTrout">Brown Trout</option>
    <option id="RainbowTrout" value="RainbowTrout">Rainbow Trout</option>
    <option id="LakeTrout" value="LakeTrout">Lake Trout</option>
    <option id="LandlockedSalmon" value="LandlockedSalmon">Landlocked Salmon</option>
    <option id="RainbowSmelt" value="RainbowSmelt">Rainbow Smelt</option>
    <option id="YellowPerch" value="YellowPerch">Yellow Perch</option>
    <option id="Walleye" value="Walleye">Walleye</option>
    <option id="NorthernPike" value="NorthernPike">Northern Pike</option>
    <option id="ChainPickerel" value="ChainPickerel">Chain Pickerel</option>
    <option id="LargemouthBass" value="LargemouthBass">Largemouth Bass</option>
    <option id="SmallmouthBass" value="SmallmouthBass">Smallmouth Bass</option>
    <option id="Bullhead" value="Bullhead">Bullhead</option>
    <option id="Panfish" value="Panfish">Panfish</option>
    <option id="BlackCrappie" value="BlackCrappie">Black Crappie</option>
    <option id="Burbot" value="Burbot">Burbot</option>
    `

    let tennessee = `
    <option id="N/A" value="N/A">N/A</option>
    `

    let iowa = `
    <option id="N/A" value="N/A">N/A</option>
    `

    let newYork = `
    <option id="selectSpecies" value="selectSpecies">Select Species (Optional)</option>
    <option id="Bluegill" value="Bluegill">Bluegill</option>
    <option id="Sunfish" value="Sunfish">Sunfish</option>
    <option id="Smallmouth Bass" value="Smallmouth Bass">Smallmouth Bass</option>
    <option id="Largemouth Bass" value="Largemouth Bass">Largemouth Bass</option>
    <option id="Yellow Perch" value="Yellow Perch">Yellow Perch</option>
    <option id="Crappie" value="Crappie">Crappie</option>
    <option id="Northern Pike" value="Northern Pike">Northern Pike</option>
    <option id="Walleye" value="Walleye">Walleye</option>
    <option id="Channel Catfish" value="Channel Catfish">Channel Catfish</option>
    <option id="Tiger Musky" value="Tiger Musky">Tiger Musky</option>
    <option id="Rainbow Trout" value="Rainbow Trout">Rainbow Trout</option>
    <option id="Carp" value="Carp">Carp </option>
    <option id="Chain Pickerel" value="Chain Pickerel">Chain Pickerel</option>
    <option id="Lake Trout" value="Lake Trout">Lake Trout</option>
    <option id="Brook Trout" value="Brook Trout">Brook Trout</option>
    <option id="LL Salmon" value="LL Salmon">LL Salmon</option>
    <option id="Brown Trout" value="Brown Trout">Brown Trout</option>
    <option id="Bullhead" value="Bullhead">Bullhead</option>
    <option id="Splake" value="Splake">Splake</option>
    `

    let nebraska = `
    <option id="selectSpecies" value="selectSpecies">Select Species (Optional)</option>
    <option id="Bluegill" value="Bluegill">Bluegill</option>
    <option id="Sunfish" value="Sunfish">Sunfish</option>
    <option id="Smallmouth Bass" value="Smallmouth Bass">Smallmouth Bass</option>
    <option id="Largemouth Bass" value="Largemouth Bass">Largemouth Bass</option>
    <option id="Yellow Perch" value="Yellow Perch">Yellow Perch</option>
    <option id="Crappie" value="Crappie">Crappie</option>
    <option id="Northern Pike" value="Northern Pike">Northern Pike</option>
    <option id="Walleye" value="Walleye">Walleye</option>
    <option id="Channel Catfish" value="Channel Catfish">Channel Catfish</option>
    <option id="Bullhead" value="Bullhead">Bullhead</option>
    <option id="Redear Sunfish" value="Redear Sunfish">Redear Sunfish</option>
    <option id="Rainbow Trout" value="Rainbow Trout">Rainbow Trout</option>
    <option id="Common Carp" value="Common Carp">Common Carp</option>
    <option id="Flathead Catfish" value="Flathead Catfish">Flathead Catfish</option>
    <option id="Freshwater Drum" value="Freshwater Drum">Freshwater Drum</option>
    <option id="Sauger" value="Sauger">Sauger</option>
    <option id="White Bass" value="White Bass">White Bass</option>
    `

    state.addEventListener("change", e => {
        if (state.value === "Iowa") {
            searchSpecies.innerHTML = iowa;
        }
        if (state.value === "Nebraska") {
            searchSpecies.innerHTML = nebraska;
        }
        if (state.value === "New York") {
            searchSpecies.innerHTML = newYork;
        }
        if (state.value === "Tennessee") {
            searchSpecies.innerHTML = tennessee;
        }
        if (state.value === "Vermont") {
            searchSpecies.innerHTML = vermont;
        }
    });

    target.addEventListener("submit", e => {
        e.preventDefault();
        lakes.where("state", "==", state.value)
        .get()
        .then(res => {
            res.forEach(doc => {
                let lake = doc.data();
                lake.id = doc.id;
                
                if (lake.county === county.value && lake.species.includes(searchSpecies.value)) {
                    console.log(lake.id);
                    choiceLakes.push(lake);
                    let newRow = document.createElement("tr");
                    let data = `
                    <td><a href="#" id="searchName">${lake.name}</a></td>
                    <td>${lake.species}</td>
                    `
                    newRow.innerHTML = data;
                    document.querySelector("#searchTable").appendChild(newRow);
                    document.querySelector("#searchName").addEventListener("click", e => {
                        e.preventDefault();
                        window.location.href=window.location.origin+"/Lake/"+lake.id;
                    })
                }
            })
        })
    })
}