var express = require('express');
var router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', function (req, res) {
  console.log('get /user route');
  // check if logged in
  if (req.isAuthenticated()) {
    // send back user object from database
    console.log('logged in', req.user);
    var userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    res.send(false);
  }
});

// clear all server session information about this user
router.get('/logout', function (req, res) {
  // Use passport's built-in method to log out the user
  console.log('Logged out');
  req.logOut();
  res.sendStatus(200);
});

router.get('/', function (req, res) {
  if (req.isAuthenticated()) {
    console.log('user is logged in');
    console.log('in get / function, req.body: ', req.body);
    pool.connect(function (connectionError, client, done) {
      if (connectionError) {
        console.log(connectionError);
        res.sendStatus(500);
      } else {
        client.query('SELECT breweries.id FROM users_breweries WHERE users_id = breweries_id;', function (queryError, resultsObj) {
          done();
          if (queryError) {
            console.log(queryError);
            res.sendStatus(500);
          } else {
            console.log('resultobj.rows: ', resultsObj.breweryname);
            res.send(resultsObj.breweryname);
          }
        });
      }
    });
  } else {
    console.log('not logged in');
    res.send(false);
  }
});


module.exports = router;