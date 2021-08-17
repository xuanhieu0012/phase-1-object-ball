function gameObject(){
    return {
        home: {
            'Team Name':"Brooklyn Nets",
            colors: "Black, White",
            players: {
               "Alan Anderson" : {number: "0",  shoe: "16" , points: "22", rebounds:"12", assists:"12", steal: "3",  blocks: "1",  slamDunks:"1"},
               "Reggie Evans"  : {number: "30", shoe: "14" , points: "12", rebounds:"12", assists:"12", steal: "12", blocks: "12", slamDunks:"7"},
               "Brook Lopez"  :  {number: "11", shoe: "17" , points: "17", rebounds:"19", assists:"10", steal: "3",  blocks: "1",  slamDunks:"15"},
               "Mason Plumlee" : {number: "1",  shoe: "19" , points: "26", rebounds:"12", assists:"6",  steal: "3",  blocks: "8",  slamDunks:"5"},
               "Jason Terry"   : {number: "31", shoe: "15" , points: "19", rebounds:"2",  assists:"2",  steal: "4",  blocks: "11", slamDunks:"1"},
            }
            
        }
    ,
    away: {
        'Team Name':"Charlotte Hornets",
        colors: "Turquoise, Purple",
        players: {
               "Jeff Adrien"        : {number: "4",  shoe: "18" , points: "10", rebounds:"1",  assists:"1",  steal: "2",  blocks: "7",  slamDunks:"2" },
               "Bismak Biyombo"     : {number: "0",  shoe: "16" , points: "12", rebounds:"4",  assists:"7",  steal: "7",  blocks: "15", slamDunks:"10"},
               "DeSagna Diop"       : {number: "2",  shoe: "14" , points: "24", rebounds:"12", assists:"12", steal: "4",  blocks: "5",  slamDunks:"5" },
               "Ben Gordon"         : {number: "8",  shoe: "15" , points: "33", rebounds:"3",  assists:"2",  steal: "1",  blocks: "1",  slamDunks:"0" },
               "Brendan Haywood"    : {number: "33", shoe: "15" , points: "6",  rebounds:"12", assists:"12", steal: "22", blocks: "5",  slamDunks:"12"},
            }

    }
}}

const game = gameObject();
const allPlayers = Object.assign({}, game.home.players, game.away.players);

function numPointsScored (playerName) {
    return allPlayers[playerName].points;
}
    
function shoeSize(playerName) {
    return allPlayers[playerName].shoe;
}

function teamColors(teamName) {
    if (teamName === game.home['Team Name']){
        return game.home['colors'];
    } else if (teamName === game.away['Team Name']){
        return game.away['colors'];
    }else{return "Team Name is not logged"}
}

function teamNames(object) {
    const teams = [game.home['Team Name'], game.away['Team Name']];
    return teams;
}

function playerNumbers(teamName) {
    if (teamName === game.home['Team Name']){
        const allNumbers = Object.assign({}, );
        console.log(allNumbers);
    } else if (teamName === game.away['Team Name']){
        console.log(game.home.players.number);
    }else{return "Team Name is not logged"}
}