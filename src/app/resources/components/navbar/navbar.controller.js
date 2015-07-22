(function() {
  'use strict';

  angular
    .module('likeSencha')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController() {
    var vm = this;

    vm.date = new Date();
  }
})();
