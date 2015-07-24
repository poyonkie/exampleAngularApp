(function() {
  'use strict';

  angular
    .module('likeSencha', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ngRoute', 'ui.bootstrap', 'commonServicesAndFactories', 'bindCompiledHtml'])
    .config(['$routeProvider', '$locationProvider', config])
    .run(['$rootScope', '$location', '$timeout', runInit]);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/tabs', {
        templateUrl: 'app/tabs/tabs.html',
        controller: 'TabsController',
        controllerAs: 'tabs'
      })
      .when('/404', {
        templateUrl: 'app/none/404.html',
        controller: '_404Controller',
        controllerAs: 'none'
      })
      .otherwise({
        redirectTo: '/404'
      });
      //$locationProvider.html5Mode(true);
  }

  function runInit ($rootScope, $location, $timeout) {
    $rootScope.$on('$locationChangeSuccess', function () {
        //console.log('$locationChangeSuccess changed!', new Date());
        //console.log($location.path().substr(1));
        $timeout(function(){
          try {
            $rootScope.setActive($location.path().substr(1));
          } catch(e) {
            //
          }
        }, 100);
    });
  }

})();
