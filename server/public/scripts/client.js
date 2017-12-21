var myApp = angular.module('myApp', ['ngRoute', 'ngMap', 'ngMaterial']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'FavoritesController as fc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/favorites', {
      templateUrl: '/views/templates/favorites.html',
      controller: 'FavoritesController as fc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/breweries', {
      templateUrl: '/views/templates/breweries.html',
      controller: 'BreweriesController as bc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
// FOR API USE
    .when('/breweriesAPI', {
      templateUrl: '/views/templates/breweriesAPI.html',
      controller: 'ApiController as ac',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
      .when('/map', {
      templateUrl: '/views/templates/map.html',
      controller: 'MapController as mc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/thanks', {
      templateUrl: '/views/templates/thanks.html'
    })
    .otherwise({
      redirectTo: 'login'
    });
});