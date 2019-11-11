const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre'],
    ['Codeville Epic Academy', 15, 'school'],
    ['Big Al Pizza', 50, 'restaurant']
];
//FIRST ATTEMPT 
// function chooseStations (stations) {
//     let goodStations = []; 
//     for (var i = 0; i < stations.length; i++) {
//         for (var j = 0; j < stations[i].length; j++){
//             if (stations[i][j] >= 20) {
//                 goodStations.push(stations[i]);
//             }
//         }
//     }
// };
// chooseStations(stations); 


//SECOND ATTEMPT
function chooseStations(stations) {
    const goodStations = []; 
    for (const station of stations) {
        const capacity = station[1];
        if (capacity >= 20) {;
            const buildingType = station[2];
            if (buildingType === "school" || buildingType === "community centre") {
                goodStations.push(station[0]);
            }
        }
    }
    return goodStations; 
}

console.log(chooseStations(stations));