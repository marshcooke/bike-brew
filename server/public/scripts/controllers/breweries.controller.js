myApp.controller('BreweriesController', function (UserService) {
  console.log('BreweriesController created');
  var vm = this;

  vm.allBreweriesObj = UserService.allBreweriesObj;

  vm.getBreweries = function () {
    UserService.getBreweries();
    console.log('brews: ', vm.allBreweriesObj);
  }

  vm.addFavorites = function (brewery) {
    UserService.addFavorites(brewery);
    console.log('add favorites hit in ic')
  }
});