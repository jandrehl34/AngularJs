angular
.module('MyApp')
.controller('dataviewcontroller',dataviewcontroller)

//registerViewController.$inject=["$location","homeservice"];
//registerViewController.$inject=["homeservice"];
//equivalent to window.location("/sdasdasdas")
function dataviewcontroller($scope,dataviewservice,$location)
{
$scope.data1  =
    {
       value :
       {
          _id : null,
          firstname : null,
          lastname  : null,
          gender    : null,
       },
       list : {
           //array 
               namecollection : 
               [
                {_id:1,firstname:'&#34', lastname:"Mangubat", gender:'boy'},
                {_id:2,firstname:'Jessie', lastname:"rocket", gender:'girl'},
                {_id:2,firstname:'Jandrehl', lastname:"Zulueta", gender:'boy'}
               ],
               deletec : [],
               deleted : undefined,
               checkbox : []
   
            }
   }    

$scope.listNames = function ()
{
   // $location.path('/home/'+data.firstname+'/'+data.lastname+'/'+ data.gender);
   dataviewservice.view1($scope.data1).then(function(success){
    if (success.status = 200){
        // returned value from the web api 
        $scope.data1.list.namecollection = success.data;
        alert("Success");
    } 
  }, function(error){ 
      console.log("ERROR");
  });
}
$scope.createlist = function ()
{
  const sample = {_id:5,name:'Jandrehl', age:22, gender:'Male'}
  $scope.data1.list.namecollection.push(sample);
}
$scope.deleteitem = function (index, id)
{
    console.log(index);
    console.log(id);
    $scope.data1.list.namecollection.splice(index, 1);


    // USE HTTP POST AND PASS THE ID TO THE SERVER TO DELETE THE DATA IN BACKEND 
}
$scope.deleteCheckedBox = function ()
{
    console.log($scope.data1.list.deletec);
    const _delete = $scope.data1.list.deletec;
    const _namecollection = $scope.data1.list.namecollection;

    $scope.data1.list.namecollection = _namecollection.filter(function(val){
        return _delete.indexOf(val._id) == -1 ; 
    })

    $scope.data1.list.deletec = [];
    $scope.data1.list.deleted = 0;

}
$scope.deleteCheckBox1 = function (index, id){
    console.log("id",id);
    console.log("Index",index);
    const _idChecked = $scope.data1.list.deletec;
    const _index = $scope.data1.list.deletec.indexOf(id);
    if (_index == -1 )
    {
        $scope.data1.list.deletec.push(id);
        console.log($scope.data1.list.deletec)
    }
    else
    {
        $scope.data1.list.deletec.splice(_index,1);
        console.log($scope.data1.list.deletec)

    }    
} 
$scope.selectall = function() 
{
    $scope.data1.list.deletec = $scope.data1.list.namecollection.map(function(item) { return item._id; });
 };

$scope.exists = function (item, list) 
{
    console.log("item:",item);
    console.log("item:",list);
    
    return $scope.data1.list.deletec.indexOf(item) > -1;
}
}
   

    
