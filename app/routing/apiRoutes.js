// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friendsData = require("../data/friends");

function friendMatch(friendArray, newFriend) {
  let bestFriendMatch;
  let bestFriendDifference = 41;
  for (let friendIndex = 0; friendIndex < friendArray.length; friendIndex++) {
   let totalDifference = 0;
   let currentFriend = friendArray[friendIndex];
   for (let scoreIndex = 0; scoreIndex < newFriend.scores.length; scoreIndex++) {
   
    totalDifference += Math.abs(newFriend.scores[scoreIndex] -
    currentFriend.scores[scoreIndex]);  
     
   }
   
   if (totalDifference < bestFriendDifference) {
    bestFriendMatch = currentFriend;
    bestFriendDifference = totalDifference;
   }
  }
  return bestFriendMatch;
}

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  
  app.post("/api/friends", function(req, res) {
   
      console.log(JSON.stringify(req.body));  
      console.log(friendsData.length);
      var newFriend = req.body;
      var match = friendMatch(friendsData, newFriend);
      friendsData.push(newFriend);
      console.log(friendsData.length);
      res.json(match);
    
        
  });
};
