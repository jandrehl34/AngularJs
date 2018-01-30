angular
.module('MyApp')
.controller('modalinstanceController',modalinstanceController)

function modalinstanceController($scope,ModalService)
{
    $scope.yesNoResult= null;
    $scope.show = function()
    {
       console.log("Modal");
       ModalService.showModal({
            templateUrl: "app/component/modal/yesno.html",
           controller: "YesNoController",
            preClose: (modal) => { modal.element.modal('hide'); }
          }).then(function(modal) {
             modal.element.modal();
            modal.close.then(function(result) {
            $scope.yesNoResult = result ? "You said Yes" : "You didn't say Yes";
            });
          });

          console.log($scope.yesNoResult);
    }
}