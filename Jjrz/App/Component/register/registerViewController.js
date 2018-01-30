angular
.module('MyApp')
.controller('registerViewController',registerViewController)

//registerViewController.$inject=["$location","homeservice"];
//registerViewController.$inject=["$modal"];
//equivalent to window.location("/sdasdasdas")
function registerViewController($scope,$sanitize,homeservice,$location)
{
$scope.message = null;

 $scope.FirstName= "jandrehl";
 $scope.LastName= "Zulueta";
 $scope.Gender = 
 {
     name: "Male"
 };
//angular 2 
//VAR equivalent to CONST
//LET varable is editable
//equivalent ng $scope.submit = function()
//var self = this;
//self.submi2 = submi2;
//function submit2()
//{
//}
$scope.submit = function()
{
//JSON format

//using ng santize for protection   
//converts invalid character 
// use ng-bind-html to convert from database to front end equivalent to ng sanitze
var data = {
    'firstname': $sanitize($scope.FirstName),
    'lastname': $sanitize($scope.LastName),
    'gender': $sanitize($scope.Gender.name)
    }
//var data2 = {
 //   'Firstname': $scope.FirstName,
 //   'Lastname': $scope.LastName,
 //   'Gender': $scope.Gender.name
// }
    console.log(data);
   // $location.path('/home/'+data.firstname+'/'+data.lastname+'/'+ data.gender);
  homeservice.register(data).then(function(success){
    console.log("SUCCESS");
  }, function(error){ 
      console.log("ERROR")
  })

  //alternative to this function is using http for you to use this inject above 
  //function registerViewController($scope,homeservice,$location,$http)
  //$http({
  // mothod:"POST",
  //url: "/API",
   //data: {
     // data
   //}
  //}).then(function mySuccess(response){
      //success status
  //}, function myError(response){
      //error status
  //});
}
}


//avoid this style
//angular
//.module('MyApp')
//.controller('registerViewController', function($location){
//})

//advised style 

//angular
//.module('MyApp')
//.controller('registerViewController',registerViewController)

//registerViewController.$inject=["$location"];
//equivalent to window.location("/sdasdasdas")
//function registerViewController($scope, $location)
//{
//function submit()
///{

//}
//function update()
//}