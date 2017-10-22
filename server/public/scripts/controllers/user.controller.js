myApp.controller('UserController', function(UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.allFavoritesObj = UserService.allFavoritesObj;

  vm.getFavoritesObj = function() {
    UserService.getFavorites();

    // vm.allFavoritesObj = UserService.allFavoritesObj;

    console.log('favorites: ', vm.allFavoritesObj);
  }

});