var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/post", function(req, res) {

    let postQuery = {};

    db.Post.findAll({
      where: postQuery
    }).then(function(chitchat) {
      res.json.(chitchat);
    });

  });

  // Create a new example
  app.post("/api/post", function(req, res) {
    db.Post.create(req.body).then(function(chitchat) {
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