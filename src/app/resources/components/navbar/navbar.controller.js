(function() {
  'use strict';

  angular
    .module('likeSencha')
    .controller('NavbarController', ['$rootScope', NavbarController]);

  /** @ngInject */
  function NavbarController($rootScope) {
    var vm = this;

    vm.active = [{home: 		 false,
    							tabs: 		 false, 
    							accordion: false }];

    $rootScope.setActive = function(whichActive){
    	//console.log('NavbarController ->', whichActive);
    	angular.forEach(vm.active, function(itemActive) {
    	  itemActive = false;
    	});
    	var _whichActive = whichActive === '' ? 'home' : whichActive;
    	vm.active[_whichActive] = true;
    };

    vm.date = new Date();
  }
})();
