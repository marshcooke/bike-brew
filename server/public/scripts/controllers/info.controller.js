myApp.controller('InfoController', function(UserService) {
  console.log('InfoController created');
  var vm = this;
  // vm.userService = UserService;

  vm.allBreweriesObj = UserService.allBreweriesObj;  

  vm.getBreweries = function() {
    UserService.getBreweries();
    
    // vm.allBreweriesObj = UserService.allBreweriesObj;     
    
    console.log('brews: ', vm.allBreweriesObj);
  }
  
});
