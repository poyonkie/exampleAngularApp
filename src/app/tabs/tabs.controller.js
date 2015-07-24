(function() {
  'use strict';

  angular
    .module('likeSencha')
    .controller('TabsController', ['ComponentsService', 'TabsService', TabsController]);

  /** @ngInject */
  function TabsController(ComponentsService, TabsService) {
    var vm = this;

    var allTabs = vm.allTabs = [];
    vm.allTabs.splice(0,vm.allTabs.length);
    vm.allTabs = TabsService.getAllTabs('./assets/models/tabs.json', function(){
      angular.forEach(vm.allTabs, function(t) {
        ComponentsService.setHtmlkey(t);
      });
    });
      
  }

})();


/*
 * Services
 */
(function() {
  'use strict';
  angular
    .module('likeSencha')
    .service('TabsService', ['DeferPromiseService', '$log', TabsService]);

    /** @ngInject */
    function TabsService(DeferPromiseService, $log){
      var dm = this;
      var dataResponse = dm.dataResponse = [];
      return {
        getAllTabs: function (dataRequest, triggerFallBack) {
          DeferPromiseService.http({method: 'GET',
                                    url: dataRequest},
                                    function(data){
                                      $log.debug(data);
                                      angular.forEach(data, function(_data, index) {
                                        dm.dataResponse[index] = {
                                          title: _data.title,
                                          html: '<p>Loading...</p>',
                                          content: _data.content,
                                          dataReference: _data.data_reference,
                                          disabled: _data.disabled || false,
                                          active: _data.active || false
                                        };
                                      });
                                      triggerFallBack();
                                    },
                                    function(error){
                                      $log.error('Catalog failed', error);
                                    });
          return dm.dataResponse;
        }
      };

    }

})();


(function() {
  'use strict';
  angular
    .module('likeSencha')
    .service('ComponentsService', ['DeferPromiseService', '$log', ComponentsService]);

    /** @ngInject */
    function ComponentsService(DeferPromiseService, $log){
      var modelsFolder = './assets/models/';
      var dm = this;
      //
      function _default (dataRequest, _objSource){
          DeferPromiseService.http({method: 'GET',
                                              url: modelsFolder+dataRequest,
                                              responseType: 'text'},
                                              function(data){
                                                //$log.debug(data);
                                                _objSource.html = data;
                                              },
                                              function(error){
                                                $log.error('Catalog failed', error);
                                                _objSource.html = '<p>'+error+' (template-default)</p>';
                                              });
      }
      //
      function getTemplate (componentTemplate, dataRequest, _objSource) {
          DeferPromiseService.http({method: 'GET',
                                              url: modelsFolder+dataRequest},
                                              function(data){
                                                $log.debug(data);
                                                _objSource.html = '<div ng-include="\'app/resources/components/'+componentTemplate+'/'+componentTemplate+'.html\'"></div>';
                                                //_objSource.html = data;
                                                //console.log(_objSource.html);
                                              },
                                              function(error){
                                                $log.error('Catalog failed', error);
                                                _objSource.html = '<p>'+error+'</p>';
                                              });
      }
      /* */
      return {
        setHtmlkey: function(_objSource){
          try {
            if(_objSource.content !== false){
              getTemplate(_objSource.content, _objSource.dataReference, _objSource);
            }else{
              _default(_objSource.dataReference, _objSource);
            }
          } catch(e) {
            //$exceptionHandler(e);
          }
        }
      };

    }

})();