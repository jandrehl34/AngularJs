angular
.module('MyApp')
.controller('modalinstanceController',modalinstanceController)

function modalinstanceController($scope,ModalService)
{
    $scope.yesNoResult= null;
    $scope.complexResult = null;
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

    $scope.showComplex = function() {

      ModalService.showModal({
        templateUrl: "app/component/modal/complexmodal.html",
        controller: "complexmodalController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          title: "A More Complex Example"
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
          }
        });
      });
  
    };
}