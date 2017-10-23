myApp.controller('MapController', function(NgMap) {
    console.log('MapController created');
    var vm = this;
    vm.map = {};

    vm.mapFavorites = function() {
      UserService.mapFavorites();
  
      console.log('favorites: ', vm.mapFavoritesObj);
    }
    
  });