var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/indexJs", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/index.js"));
  });

  app.get("/style", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/styles/style.css"));
  });

  app.get("/darkly", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/styles/darkly.css"));
  });

  app.get("/flatly", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/styles/flatly.css"));
  });

  // login route loads login.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // chat route loads chat.html
  app.get("/chat", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/chat.html"));
  });

  // authors route loads author-manager.html
  app.get("/newUser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newUser.html"));
  });
};
