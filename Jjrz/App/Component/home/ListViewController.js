angular
.module('MyApp')
.controller('ListViewController',ListViewController)

//registerViewController.$inject=["$location","homeservice"];
//registerViewController.$inject=["homeservice"];
//equivalent to window.location("/sdasdasdas")
function ListViewController($scope)
{
$scope.data = ["Value","For","NG-REPEAT"];
$scope.friends = {
list : {
    //array 
        namecollection : [
        {name:'John', age:25, gender:'boy'},
        {name:'Jessie', age:30, gender:'girl'},
        {name:'Johanna', age:28, gender:'girl'},
        {name:'Joy', age:15, gender:'girl'},
        {name:'Mary', age:28, gender:'girl'},
        {name:'Peter', age:95, gender:'boy'},
        {name:'Sebastian', age:50, gender:'boy'},
        {name:'Erika', age:27, gender:'girl'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Samantha', age:60, gender:'girl'}]
     }
}
}