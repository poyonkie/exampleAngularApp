!function(){"use strict";function e(e,t){e.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).when("/tabs",{templateUrl:"app/tabs/tabs.html",controller:"TabsController",controllerAs:"tabs"}).when("/404",{templateUrl:"app/none/404.html",controller:"_404Controller",controllerAs:"none"}).otherwise({redirectTo:"/404"}),window.history&&window.history.pushState&&t.html5Mode({enabled:!0,requireBase:!1})}function t(e,t,a){e.$on("$locationChangeSuccess",function(){a(function(){try{e.setActive(t.path().substr(1))}catch(a){}},100)})}angular.module("likeSencha",["ngAnimate","ngCookies","ngTouch","ngSanitize","restangular","ngRoute","ui.bootstrap","commonServicesAndFactories","bindCompiledHtml"]).config(["$routeProvider","$locationProvider",e]).run(["$rootScope","$location","$timeout",t])}(),function(){"use strict";function e(e){var t=this;t.active=[{home:!1,tabs:!1,accordion:!1}],e.setActive=function(e){angular.forEach(t.active,function(e){e=!1});var a=""===e?"home":e;t.active[a]=!0},t.date=new Date}angular.module("likeSencha").controller("NavbarController",["$rootScope",e]),e.$inject=["$rootScope"]}(),function(){"use strict";function e(){var e=this;e.sortType="name",e.sortReverse=!1,e.searchFish="",e.sushi=[{name:"Cali Roll",fish:"Crab",tastiness:2},{name:"Philly",fish:"Tuna",tastiness:4},{name:"Tiger",fish:"Eel",tastiness:7},{name:"Rainbow",fish:"Variety",tastiness:6}]}angular.module("likeSencha").controller("GridController",e)}();var commonServicesAndFactories=angular.module("commonServicesAndFactories",[]);!function(){"use strict";commonServicesAndFactories.service("DeferPromiseService",["$http","$q",function(e,t){return{http:function(a,n,i){var r=t.defer();e(a).success(function(e){r.resolve(e)}).error(function(e){r.reject(e)});var o=r.promise;o.then(function(e){n(e)}),void 0!==i&&o["catch"](function(e){i(e)})}}}]).service("AlertConfirmService",["$window",function(e){var t="OK!",a="NO!";return{confirm:function(n,i,r){e.confirm(n)?i(t):void 0!==r&&r(a)}}}])}(),function(){"use strict";commonServicesAndFactories.factory("confirm",["$window",function(e){return e.confirm}])}(),function(){"use strict";angular.module("ui.bootstrap.carousel").directive("disableAnimation",["$animate",function(e){return{restrict:"A",link:function(t,a,n){n.$observe("disableAnimation",function(t){e.enabled(!t,a)})}}}])}();var bindCompiledHtml=angular.module("bindCompiledHtml",[]);!function(){"use strict";bindCompiledHtml.directive("bindCompiledHtml",["$compile","$timeout",function(e){return{template:"<div></div>",scope:{rawHtml:"=bindCompiledHtml"},link:function(t,a){t.$watch("rawHtml",function(n){if(n){var i=e(n)(t.$parent);a.contents().remove(),a.append(i)}})}}}])}(),function(){"use strict";function e(e,t){{var a=this;a.allTabs=[]}a.allTabs.splice(0,a.allTabs.length),a.allTabs=t.getAllTabs("assets/models/tabs.json",function(){angular.forEach(a.allTabs,function(t){e.setHtmlkey(t)})})}angular.module("likeSencha").controller("TabsController",["ComponentsService","TabsService",e]),e.$inject=["ComponentsService","TabsService"]}(),function(){"use strict";function e(e,t){{var a=this;a.dataResponse=[]}return{getAllTabs:function(n,i){return e.http({method:"GET",url:n},function(e){t.debug(e),angular.forEach(e,function(e,t){a.dataResponse[t]={title:e.title,html:"<p>Loading...</p>",content:e.content,dataReference:e.data_reference,disabled:e.disabled||!1,active:e.active||!1}}),i()},function(e){t.error("Catalog failed",e)}),a.dataResponse}}}angular.module("likeSencha").service("TabsService",["DeferPromiseService","$log",e]),e.$inject=["DeferPromiseService","$log"]}(),function(){"use strict";function e(e,t){function a(a,n){e.http({method:"GET",url:i+a,responseType:"text"},function(e){n.html=e},function(e){t.error("Catalog failed",e),n.html="<p>"+e+" (template-default)</p>"})}function n(a,n,r){e.http({method:"GET",url:i+n},function(e){t.debug(e),r.html="<div ng-include=\"'app/resources/components/"+a+"/"+a+".html'\"></div>"},function(e){t.error("Catalog failed",e),r.html="<p>"+e+"</p>"})}var i="./assets/models/";return{setHtmlkey:function(e){try{e.content!==!1?n(e.content,e.dataReference,e):a(e.dataReference,e)}catch(t){}}}}angular.module("likeSencha").service("ComponentsService",["DeferPromiseService","$log",e]),e.$inject=["DeferPromiseService","$log"]}(),function(){"use strict";function e(){var e=this;e.awesomeThings=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"}],angular.forEach(e.awesomeThings,function(e){e.rank=Math.random()})}angular.module("likeSencha").controller("_404Controller",e)}(),function(){"use strict";function e(){var e=this;e.awesomeThings=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}],angular.forEach(e.awesomeThings,function(e){e.rank=Math.random()})}angular.module("likeSencha").controller("MainController",e)}(),angular.module("likeSencha").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="fluid-container"><div class="visible-xs-block visible-sm-block main-top" ng-include="\'app/resources/components/navbar/navbar.html\'"></div><div class="col-md-2 hidden-sm hidden-xs main-aside" ng-include="\'app/resources/components/navbar/navbar.html\'"></div><div class="col-md-10 col-md-offset-2"><div class="clearfix"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{awesomeThing.logo}}" alt="{{awesomeThing.title}}"><div class="caption"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href="{{awesomeThing.url}}">{{awesomeThing.url}}</a></p></div></div></div></div><hr><div class="footer clearfix"><p>Poyonkie <a href="https://github.com/poyonkie">GitHub</a></p></div></div></div>'),e.put("app/none/404.html",'<div class="fluid-container"><div class="visible-xs-block visible-sm-block main-top" ng-include="\'app/resources/components/navbar/navbar.html\'"></div><div class="col-md-2 hidden-sm hidden-xs main-aside" ng-include="\'app/resources/components/navbar/navbar.html\'"></div><div class="col-md-10 col-md-offset-2"><h1>404</h1><hr><div class="footer clearfix"><p>Poyonkie <a href="https://github.com/poyonkie">GitHub</a></p></div></div></div>'),e.put("app/tabs/tabs.html",'<div class="fluid-container"><div class="visible-xs-block visible-sm-block main-top" ng-include="\'app/resources/components/navbar/navbar.html\'"></div><div class="col-md-2 hidden-sm hidden-xs main-aside" ng-include="\'app/resources/components/navbar/navbar.html\'"></div><div class="col-md-10 col-md-offset-2"><div class="clearfix"><div class="thumbnail thumbs-tabs"><tabset justified="true"><tab ng-repeat="itemTab in tabs.allTabs" heading="{{itemTab.title}}" active="itemTab.active" disabled="itemTab.disabled"><div ng-bind="itemTab.html" bind-compiled-html="itemTab.html"></div></tab></tabset></div></div><hr><div class="footer clearfix"><p>Poyonkie <a href="https://github.com/poyonkie">GitHub</a></p></div></div></div>'),e.put("app/resources/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarController as navbar"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <span class="navbar-brand"><i class="glyphicon glyphicon-equalizer"></i> Like Sencha</span></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li ng-class="{ \'active\': navbar.active.home}"><a ng-href="/">Home</a></li><li ng-class="{ \'active\': navbar.active.tabs}"><a ng-href="/tabs">Tabs</a></li><li ng-class="{ \'active\': navbar.active.accordion}"><a ng-href="/accordion">Accordion</a></li></ul><ul class="nav navbar-nav navbar-right nav-date"><li class="only-static-top"><hr></li><li>Current date: {{ navbar.date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>'),e.put("app/resources/components/grid/grid.html",'<div ng-controller="GridController as grid" class="grid"><div class="alert alert-info"><p>Sort Type: {{ grid.sortType }}</p><p>Sort Reverse: {{ grid.sortReverse }}</p><p>Search Query: {{ grid.searchFish }}</p></div><form><div class="form-group"><div class="input-group"><div class="input-group-addon"><i class="glyphicon glyphicon-search"></i></div><input type="text" class="form-control" placeholder="Search da Fish" ng-model="grid.searchFish"></div></div></form><table class="table table-bordered table-striped"><thead><tr><td><a href="" ng-click="grid.sortType = \'name\'; grid.sortReverse = !grid.sortReverse">Sushi Roll <span ng-show="grid.sortType == \'name\' && !grid.sortReverse" class="fa fa-caret-down"></span> <span ng-show="grid.sortType == \'name\' && grid.sortReverse" class="fa fa-caret-up"></span></a></td><td><a href="" ng-click="grid.sortType = \'fish\'; grid.sortReverse = !grid.sortReverse">Fish Type <span ng-show="grid.sortType == \'fish\' && !grid.sortReverse" class="fa fa-caret-down"></span> <span ng-show="grid.sortType == \'fish\' && grid.sortReverse" class="fa fa-caret-up"></span></a></td><td><a href="" ng-click="grid.sortType = \'tastiness\'; grid.sortReverse = !grid.sortReverse">Taste Level <span ng-show="grid.sortType == \'tastiness\' && !grid.sortReverse" class="fa fa-caret-down"></span> <span ng-show="grid.sortType == \'tastiness\' && grid.sortReverse" class="fa fa-caret-up"></span></a></td></tr></thead><tbody><tr ng-repeat="roll in grid.sushi | orderBy:grid.sortType:grid.sortReverse | filter:grid.searchFish"><td>{{ roll.name }}</td><td>{{ roll.fish }}</td><td>{{ roll.tastiness }}</td></tr></tbody></table></div>')}]);