var app = angular.module('MyApp');
app.controller('loginViewController', function($scope,$location) {
    $scope.FirstName="";
    $scope.LastName="";
    $scope.Gender="";
   
    $scope.submit = function(){
        var uname = $scope.username;
        var pass = $scope.password;
        if(uname == "admin" && pass== "admin")
        {
            $location.path('/');

        }
        else
        {
            alert("Incorrect UserName or Password");
        }
    }
    $scope.submit1= function(){
        var uname = $scope.username;
        var pass = $scope.password;
        console.log('login');
        if(uname == "admin" && pass== "12345")
        {
            $location.path('/');

        }
        else
        {
            alert("Incorrect UserName or Password");
        }
    }
});