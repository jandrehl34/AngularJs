//custom html output
//
//directive types
//A B C 
//directives lecture  2 types of directives structural and attribute 
//1. stratural modify the strature of the dom 
//2. attribute modify the attributes of dom elements 
// element - e attribute a , class - c comment m
angular.module('MyApp')
.directive('myCustomRestrict',function () {
     return {
       //'restrict : 'A',
       restrict: 'AEC',
       controller:  'navController',
       controllerAs: 'NavCtrl',
       templateUrl: 'App/Shared/navdirectiveview.html'
     };
});