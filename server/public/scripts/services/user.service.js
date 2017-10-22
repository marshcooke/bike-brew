myApp.factory('UserService', function ($http, $location) {
  console.log('UserService Loaded');

  var userObject = {};
  var allBreweriesObj = { brew: [] };
  var allFavoritesObj = { fav: [] };

  return {
    userObject: userObject,
    allBreweriesObj: allBreweriesObj,
    allFavoritesObj: allFavoritesObj,

    getuser: function () {
      console.log('UserService -- getuser');
      $http.get('/user').then(function (response) {
        if (response.data.username) {
          // user has a curret session on the server
          userObject.userName = response.data.username;
          console.log('UserService -- getuser -- User Data: ', userObject.userName);
        } else {
          console.log('UserService -- getuser -- failure');
          // user has no session, bounce them back to the login page
          $location.path("/home");
        }
      }, function (response) {
        console.log('UserService -- getuser -- failure: ', response);
        $location.path("/home");
      });
    },

    logout: function () {
      console.log('UserService -- logout');
      $http.get('/user/logout').then(function (response) {
        console.log('UserService -- logout -- logged out');
        $location.path("/home");
      });
    },

    getBreweries: function () {
      $http({
        method: 'GET',
        url: '/breweries'
      }).then(function (response) {
        console.log('response is: ', response.data);
        allBreweriesObj.brew = response.data;
      })
    },

    addFavorites: function () {
      $http({
        method: 'POST',
        url: '/',
        data: [breweryname]
      }).then(function (response) {
        console.log('post response is: ', response);
      })
    },

    getFavorites: function () {
      $http({
        method: 'GET',
        url: '/user'
      }).then(function (response) {
        console.log('response is: ', response.data);
        allFavoritesObj.fav = response.data;
      })
    },


  };
});