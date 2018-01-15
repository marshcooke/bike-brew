myApp.controller('FavoritesController', function (UserService) {
  // console.log('FavoritesController created');
  var vm = this;
  
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.allFavoritesObj = UserService.allFavoritesObj;

  vm.getFavorites = function () {
    UserService.getFavorites();
    // vm.allFavoritesObj = UserService.allFavoritesObj;
    // console.log('favorites: ', vm.allFavoritesObj);
  }

  vm.deleteFavorites = function (brewery) {
    UserService.deleteFavorites(brewery);
    // vm.allFavoritesObj = UserService.allFavoritesObj;
    // console.log('delete favorites hit in uc')
    vm.getFavorites();
  }

});