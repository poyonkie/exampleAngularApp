var commonServicesAndFactories = angular.module('commonServicesAndFactories', []);

/*
 * SERVICES
 */
(function() {
  'use strict';

	commonServicesAndFactories
	
		/*
		 * Service to fix loadData vs view.
		 * Use service promise $q
		 */
	 	.service('DeferPromiseService', ['$http', '$q', function ($http, $q) {
	 		//  
	  	return {
	  		http: function(config, callBackThen, callBackCatch){
	  			var qDeferred = $q.defer();
	  			$http(config)
	  				.success(function(data) {
	  				    qDeferred.resolve(data);
	  				})
	  				.error(function (err) {
	  				    qDeferred.reject(err);
	  				});
	  			var qPromise = qDeferred.promise;
	  			qPromise
	  				.then(function(data) {
	  					callBackThen(data);
			  	    });
			  	if(callBackCatch !== undefined){
			  		qPromise
				  		.catch(function(error) {
				  			callBackCatch(error);
				  		});
			  	}
	  		}
	  	};// #end return
	  	//
	 	}])

	  /*
		 * Service to confirm some flowData.
		 */
	 	.service('AlertConfirmService', ['$window', function ($window){
	 		var logAcept = 'OK!';
	 		var logCancel = 'NO!';
	 		//
	 		return {
	 			confirm: function(msg, callBackAcept, callBackCancel){
	 				if($window.confirm(msg)){
	 					callBackAcept(logAcept);
	 				}else{
	 					if(callBackCancel !== undefined){ callBackCancel(logCancel); }
	 				}
	 			}
	 		};// #end return
	 		//
	 	}])

})();

/*
 * FACTORIES
 */
(function() {
  'use strict';

	commonServicesAndFactories
	
		/*
		 * .
		 * .
		 */
	 	.factory('confirm', ['$window', function ($window) {
	 		//  
	  	return $window.confirm;
	  	//
	 	}])

	  /*
		 * Service to confirm some flowData.
		 *//*
	 	.service('AlertConfirmService', [function (){
	 		
	 		//
	 		return {
	 			
	 		};// #end return
	 		//
	 	}])*/

})();