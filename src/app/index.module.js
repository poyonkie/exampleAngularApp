(function() {
  'use strict';

  angular
    .module('likeSencha', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ngRoute', 'ui.bootstrap', 'commonServicesAndFactories', 'bindCompiledHtml'])
    .config(['$routeProvider', '$locationProvider', config])
    .run(['$rootScope', '$location', '$timeout', runInit]);

  function config($routeProvider, $locationProvider) {
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
      //
      //check browser support
      if(window.history && window.history.pushState){
          //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">
          // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase
          //
          // if you don't wish to set base URL then use this
          $locationProvider.html5Mode({
                enabled: false,
                requireBase: false
          });
      }
  }

  function runInit ($rootScope, $location, $timeout) {
    $rootScope.$on('$locationChangeSuccess', function () {
        //console.log('$locationChangeSuccess changed!', new Date());
        //console.log($location.path().substr(1));
        try {
          $timeout(function(){
            $rootScope.setActive($location.path().substr(1));
            $rootScope.setActive2($location.path().substr(1));
          }, 100);
        } catch(e) {
          //
        }
    });
  }

})();
