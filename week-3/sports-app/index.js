const Team = require('./team').Team;
const moment = require('moment');
const teamManger = require('./team-manager');

let teamsArr = teamManger.findTeams();

let champTeam1 = teamManger.findTeam('Red Bull');
let champTeam2 = teamManger.findTeam('Ferrari');

console.log('-- DISPLAYING TEAMS --');

teamsArr.forEach((team) => {
    console.log(`Name: ${team.name}\nMascot: ${team.mascot}\nPlayer Count: ${team.playerCount}\n`);
});

console.log('\n -- CHAMPIONSHIP GAME --');

console.log(`${champTeam1.name} ${champTeam1.mascot} is playing ${champTeam2.name} ${champTeam2.mascot} on ${moment().add(7, 'days').format('MM-DD-YYYY')} at 7:30 PM CST`);