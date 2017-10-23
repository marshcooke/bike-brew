myApp.service('UserService', function ($http, $location) {
  console.log('UserService Loaded');

  var self = this;

  self.userObject = {};
  self.allBreweriesObj = { brew: [] };
  self.allFavoritesObj = { favorite: [] };

  self.getuser = function () {
    console.log('UserService -- getuser');
    $http.get('/user').then(function (response) {
      if (response.data.username) {
        // user has a curret session on the server
        self.userObject.userName = response.data.username;
        console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
      } else {
        console.log('UserService -- getuser -- failure');
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    }, function (response) {
      console.log('UserService -- getuser -- failure: ', response);
      $location.path("/home");
    });
  }

  self.logout = function () {
    console.log('UserService -- logout');
    $http.get('/user/logout').then(function (response) {
      console.log('UserService -- logout -- logged out');
      $location.path("/home");
    });
  }

  self.getBreweries = function () {
    $http({
      method: 'GET',
      url: '/breweries'
    }).then(function (response) {
      console.log('response is: ', response.data);
      self.allBreweriesObj.brew = response.data;
    })
  }

  self.addFavorites = function (brewery) {
    $http({
      method: 'POST',
      url: '/breweries',
      data: [brewery]
    }).then(function (response) {
      console.log('post response is: ', response);
    })
  }

  self.getFavorites = function () {
    $http({
      method: 'GET',
      url: '/user/favorite'
    }).then(function (response) {
      console.log('response is: ', response);
      self.allFavoritesObj.favorite = response.data;
    })
  }
});