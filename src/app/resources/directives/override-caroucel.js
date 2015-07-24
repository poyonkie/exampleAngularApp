(function() {
  'use strict';

	angular
	    .module('ui.bootstrap.carousel')
	    .directive('disableAnimation', function($animate){
	    return {
	        restrict: 'A',
	        link: function($scope, $element, $attrs){
	            $attrs.$observe('disableAnimation', function(value){
	                $animate.enabled(!value, $element);
	            });
	        }
	    };
	});

})();