/*
 I: array of arrays of strings containing teams' names that
    have played each other [homeTeam, awayTeam]; 30 char max
 I: array of ones (home (1st) team won) and zeroes (away (2nd)
    team won representing the winners
 O: string of name of winner of competition
 C: always be at least two teams, each playing once; one winner
 C: 3 points for a win; 0 points for a loss; no ties
*/

// establish setting for home team wins
const HOME_TEAM_WON = 1;

// O(n) time | O(k) space
// n = # of competitions; k = # of winners
const tournamentWinner = (competitions, results) => {
  const winners = {};
	let topScore = 0;
	let champion;
	
	// iterate thru competitions array
	for (let i = 0; i < competitions.length; i++) {
		const result = results[i];
		// destructure to assign who is home and who is away
		const [homeTeam, awayTeam] = competitions[i];
		const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
		
		// only add winners to our hash table
		if (!winners[winningTeam]) {
				winners[winningTeam] = 3;
		} else {
			winners[winningTeam] += 3;
		}
	}
	
	// iterate thru hash table of winners
	for (let winner in winners) {
		if (winners[winner] > topScore) {
			topScore = winners[winner];
			champion = winner;
		}
	}
	
  return champion;
}

// Testing
const competitions = [
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"],
  ["C#", "Python"],
  ["Java", "C#"],
  ["C#", "HTML"]
];
const results = [0, 1, 1, 1, 0, 1];
console.log(tournamentWinner(competitions, results)); // C#


const competitions1 = [
  ["AlgoMasters", "FrontPage Freebirds"],
  ["Runtime Terror", "Static Startup"],
  ["WeC#", "Hypertext Assassins"],
  ["AlgoMasters", "WeC#"],
  ["Static Startup", "Hypertext Assassins"],
  ["Runtime Terror", "FrontPage Freebirds"],
  ["AlgoMasters", "Runtime Terror"],
  ["Hypertext Assassins", "FrontPage Freebirds"],
  ["Static Startup", "WeC#"],
  ["AlgoMasters", "Static Startup"],
  ["FrontPage Freebirds", "WeC#"],
  ["Hypertext Assassins", "Runtime Terror"],
  ["AlgoMasters", "Hypertext Assassins"],
  ["WeC#", "Runtime Terror"],
  ["FrontPage Freebirds", "Static Startup"]
];
const results1 = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0];
console.log(tournamentWinner(competitions1, results1)); // AlgoMasters
