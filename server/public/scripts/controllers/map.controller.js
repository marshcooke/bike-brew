myApp.controller('MapController', function (UserService, NgMap) {
  console.log('MapController created');
  var vm = this;
  vm.userService = UserService;
  // vm.map = {};

  vm.mapFavoritesObj = UserService.mapFavoritesObj

  NgMap.getMap('map').then(function (map) {
    console.log('map init in map controller');
    self.map = map;
    //ask jen later about more info on making them fit in the window
  })

  vm.mapFavorites = function () {
    UserService.mapFavorites();
    console.log('map favorites: ', vm.mapFavoritesObj); 
  }

  vm.mapFavorites();
});