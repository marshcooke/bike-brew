myApp.service('UserService', function ($http, $location) {
  console.log('UserService Loaded');

  var self = this;

  self.userObject = {};
  self.allBreweriesObj = { brew: [] };
  self.allFavoritesObj = { favorite: [] };
  self.mapFavoritesObj = {list: []};

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
        $location.path("/login");
      }
    }, function (response) {
      console.log('UserService -- getuser -- failure: ', response);
      $location.path("/login");
    });
  }

  self.logout = function () {
    console.log('UserService -- logout');
    $http.get('/user/logout').then(function (response) {
      console.log('UserService -- logout -- logged out');
      $location.path("/login");
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

  self.deleteFavorites = function (brewery) {
    $http({
      method: 'DELETE',
      url: '/breweries/' + brewery,
    }).then(function (response) {
      console.log('delete response is: ', response.data);
    })
  }

  self.mapFavorites = function () {
    $http({
      method: 'GET',
      url: '/map/favorite'
    }).then(function (response) {
      // console.log('get map favs response is: ', response);
      self.mapFavoritesObj.list = response.data;
      console.log('get map favs response is: ', self.mapFavoritesObj);
      
    })
  }

});