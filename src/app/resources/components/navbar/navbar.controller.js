(function() {
  'use strict';

  angular
    .module('likeSencha')
    .controller('NavbarTopController', ['$rootScope', '$scope', NavbarTopController])
    .controller('NavbarAsideController', ['$rootScope', '$scope', NavbarAsideController])
    .factory('stateMenuFactory', ['$rootScope', '$scope', stateMenuFactory]);

  /** @ngInject */
  function NavbarTopController($rootScope, $scope) {
    var vm = $scope;

    vm.active = [{home: 		 false,
    							tabs: 		 false, 
    							accordion: false }];

    $rootScope.setActive = function(whichActive){
    	console.log('NavbarController ->', whichActive);
    	angular.forEach(vm.active, function(itemActive) {
    	  itemActive = false;
    	});
    	var _whichActive = whichActive === '' ? 'home' : whichActive;
    	vm.active[_whichActive] = true;
    };

    vm.date = new Date();
  }

  /** @ngInject */
  function NavbarAsideController($rootScope, $scope) {
    var vm = $scope;

    vm.active = [{home:      false,
                  tabs:      false, 
                  accordion: false }];

    $rootScope.setActive2 = function(whichActive){
      console.log('NavbarController ->', whichActive);
      angular.forEach(vm.active, function(itemActive) {
        itemActive = false;
      });
      var _whichActive = whichActive === '' ? 'home' : whichActive;
      vm.active[_whichActive] = true;
    };

    vm.date = new Date();
  }

  function stateMenuFactory($rootScope, $scope){
    
  }

})();
