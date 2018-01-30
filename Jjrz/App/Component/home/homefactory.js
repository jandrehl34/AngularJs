angular 
.module('MyApp')
.factory('registerfactory',registerfactory)

registerfactory.$inject = ["$resource"];

function registerfactory($resource)
{
  
    return $resource("/register",{},{
      'save' : {method : 'POST'}
    })
}