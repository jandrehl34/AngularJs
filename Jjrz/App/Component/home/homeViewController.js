(function(){
    'use strict';
    angular.module('MyApp').controller('homeViewController',homeViewController)

    //getting parameters from other form
    //homeViewController.$inject['$routeParams'];
    function homeViewController($scope,$routeParams)
    {
       var data = {
           'firstname' : $routeParams.firstname,
           'lastname' : $routeParams.lastname,
           'gender' : $routeParams.gender,
       }

       $scope.FirstName = data.firstname;
       $scope.LastName = data.lastname;
       $scope.Gender = data.gender;
       console.log(data.firstname)
    }
})();

//angular.module('MyApp', []).controller('homeViewController', function($scope) {
   
//});
