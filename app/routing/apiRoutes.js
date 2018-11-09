// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friendsData = require("../data/friends");



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
  var newFriend = req.body;
  res.json({message: "hi"});
    
  });
};
