myApp.controller('LoginController', function ($http, $location, UserService) {
  // console.log('LoginController created');
  var vm = this;
  
  vm.user = {
    username: '',
    password: ''
  };
  vm.message = '';

  vm.login = function () {
    // console.log('LoginController -- login');
    if (vm.user.username === '' || vm.user.password === '') {
      vm.message = "Enter your username and password!";
    } else {
      // console.log('LoginController -- login -- sending to server...', vm.user);
      $http.post('/', vm.user).then(function (response) {
        if (response.data.username) {
          // console.log('LoginController -- login -- success: ', response.data);
          // location works with SPA (ng-route)
          $location.path('/home'); // http://localhost:6172/#/user
        } else {
          // console.log('LoginController -- login -- failure: ', response);
          vm.message = "Try that again!";
        }
      }).catch(function (response) {
        // console.log('LoginController -- registerUser -- failure: ', response);
        vm.message = "Try that again!";
      });
    }
  };

  vm.registerUser = function () {
    // console.log('LoginController -- registerUser');
    if (vm.user.username === '' || vm.user.password === '') {
      vm.message = "Choose a username and password!";
    } else {
      // console.log('LoginController -- registerUser -- sending to server...', vm.user);
      $http.post('/register', vm.user).then(function (response) {
        // console.log('LoginController -- registerUser -- success');
        $location.path('/login');
      }).catch(function (response) {
        // console.log('LoginController -- registerUser -- error');
        vm.message = "Please try again."
      });
    }
  }
});
