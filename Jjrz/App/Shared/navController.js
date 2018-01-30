angular
.module('MyApp')
.controller('navController',navController)

//registerViewController.$inject=["$location","homeservice"];
//registerViewController.$inject=["homeservice"];
//equivalent to window.location("/sdasdasdas")
function navController($scope,$location,$localStorage)
{
 $scope.uname = "jandrehl34@gmail.com";
 $scope.stats= "Online";
 $scope.session = $localStorage.login._id;

 $scope.pathVal = {
    value : {
         path : $location.path().split("/") || null
    },
    header : 'Angular shit',
    topic : [
    {
        link : '/',
        title : 'Home'
    }]
 }
 //console.log($scope.data.value.path);
}