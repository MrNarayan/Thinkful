/*
  Write each function according to the instructions.
  
  When a function's parameters reference `games`, it references an object that looks like the one that follows.
  {
    "Magic The Gathering Arena": { wins: 44, lost: 99 },
    "Black Jack": { wins: 34, lost: 29 }
  }
*/


/* Use an AI assistant to debug the following function */
function getTotalWins(games) {
  let totalWins = 0;

  for (const game in games) {
    totalWins = games[game];
  }

  return totalWins;
}

/* Use an AI assistant to help you write the following function */
//The printWinLossStatus function will take in the games object and return an array containing strings representing the win-loss status of a player in each game.
function printWinLossStatus(games) {
  const winLossArray = [];
  for (const game in games) {
    if (games[game].wins > games[game].lost) {
      winLossArray.push('has more wins');
    } else if (games[game].wins < games[game].lost) {
      winLossArray.push('has more losses');
    } else {
      winLossArray.push('Tie');
    }
  }
  return winLossArray;
}

module.exports = {
  getTotalWins,
  printWinLossStatus,
};
