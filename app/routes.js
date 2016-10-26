
//grab the nerd model
var Nerd = require('./models/nerd');



module.exports = function(app) {
  // server routes
  //handle api calls
  //auth routes

  //sample api routes

  app.get('/api/nerds', function(req, res) {
    Nerd.find(function(err, nerds) {
      if (err) res.send(err);
      res.json(nerds);
    });
  });

  app.get("*", function(req, res) {
    res.sendfile('./public/views/index.html');
  });
};
