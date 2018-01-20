angular
.module('MyApp')
.controller('registerViewController',registerViewController)

//registerViewController.$inject=["$location"];
//equivalent to window.location("/sdasdasdas")
function registerViewController($scope, $location)
{
 $scope.FirstName= "jandrehl";
 $scope.LastName= "Zulueta";
 $scope.Gender = 
 {
     name: "Male"
 };
//angular 2 
//VAR equivalent to CONST
//LET varable is editable
$scope.submit = function()
{
//JSON format
var data = {
    'firstname': $scope.FirstName,
    'lastname': $scope.LastName,
    'gender': $scope.Gender.name
    
    }

    console.log(data);
    $location.path('/home/'+data.firstname+'/'+data.lastname+'/'+ data.gender);
}

}
//avoid this style
//angular
//.module('MyApp')
//.controller('registerViewController', function($location){
//})

