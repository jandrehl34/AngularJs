angular 
.module('MyApp')
.factory('dataviewfactory',dataviewfactory)

dataviewfactory.$inject = ["$resource"];

function dataviewfactory($resource)
{
    const apiUrl = 'mockjson.json';
    return $resource(apiUrl,{},{
      'get' : {method : 'GET'}
    })
}