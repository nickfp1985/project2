var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/message", function(req, res) {

    let msgQuery = {};

    db.Message.findAll({
      where: msgQuery
    }).then(function(chitchat) {
      res.json.(chitchat);
    });

  });

  // Create a new example
  app.post("/api/message", function(req, res) {
    db.Message.create(req.body).then(function(chitchat) {
      res.json(chitchat);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
    
  //   });
  // });
};

// POSSIBLE ADDITIONS
//
// show chats from a specific user