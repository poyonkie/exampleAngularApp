(function() {
  'use strict';

  angular
    .module('likeSencha')
    .controller('GridController', GridController);

  /** @ngInject */
  function GridController() {
    var vm = this;

    vm.sortType     = 'name'; // set the default sort type
  	vm.sortReverse  = false;  // set the default sort order
  	vm.searchFish   = '';     // set the default search/filter term

  	vm.sushi = [
	    { name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
	    { name: 'Philly', fish: 'Tuna', tastiness: 4 },
	    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
	    { name: 'Rainbow', fish: 'Variety', tastiness: 6 }
	  ];
  }
})();
