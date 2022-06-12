const Team = require('./team').Team;
const moment = require('moment');

//returns array of created teams
function findTeams() {
    let team1 = new Team('Red Bull', 'Checos', '2');
    let team2 = new Team('Mclaren', 'Honeybadgers', '2');
    let team3 = new Team('Mercedes', 'Goats', '2');
    let team4 = new Team('Aston Martin', 'Spinallas', '2');
    let team5 = new Team('Ferrari', 'Legregs', '2');
    return [team1, team2, team3, team4, team5];
}

//finds teams via name
function findTeam(name) {
    let teams = findTeams();
    let foundTeam = teams.find(team => team.name === name);
    return foundTeam;
}

function getGame(team1, team2) {
    let gameDate = moment().add('d', 5);
    console.log(`${team1.name} ${team1.mascot} is playing ${team2.name} ${team2.mascot} on $ at 7:30PM CST`);
}

exports.findTeams = findTeams;
exports.getGame = getGame; 
exports.findTeam = findTeam;