angular 
.module('MyApp')
.service('dataviewservice',dataviewservice)

dataviewservice.$inject=["dataviewfactory"];
function dataviewservice(dataviewfactory)
{
    var service = {
        view1: view1
    }

    return service;

    function view1(o){
    console.log(o);
    const getdb = dataviewfactory.get({});
    return getdb.$promise;
    }   
 // when declaring another function in service you need to add it to in list of services

}