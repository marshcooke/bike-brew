myApp.controller('MapController', function (UserService, NgMap, $http) {
  console.log('MapController created');
  var vm = this;
  vm.userService = UserService;

  vm.routes = [];

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

  vm.addRoute = function() {
    console.log('in vm.routeIn addRoute: ', vm.routeIn);
    console.log('in vm.destIn addRoute: ', vm.destIn);
    vm.routes.push(vm.routeIn);
    vm.routes.push(vm.destIn);
    $http({
      method: 'POST',
      url: '/',
      data: {
        routeOrigin: vm.routeIn, 
        destName: vm.destIn
      }
    }).then(function(response) {
      console.log('post response is:', response);
      vm.getRoutes();
    });
  };

  vm.getRoutes = function() {
    $http({
      type: 'GET',
      url: '/route'
    }).then(function(response) {
      vm.routes = response.data;
    });
  };

});