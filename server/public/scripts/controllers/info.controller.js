myApp.controller('InfoController', function(UserService) {
  console.log('InfoController created');
  var vm = this;

  vm.allBreweriesObj = UserService.allBreweriesObj;  

  vm.getBreweries = function() {
    UserService.getBreweries();
    
    // vm.allBreweriesObj = UserService.allBreweriesObj;     
    
    console.log('brews: ', vm.allBreweriesObj);
  }
  
  vm.addFavorites = function() {
    UserService.addFavorites();
    vm.allFavoritesObj = UserService.allFavoritesObj;
    console.log('favorites: ', vm.allFavoritesObj)
  }

});