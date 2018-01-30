angular 
.module('MyApp')
.factory('sessionFactory',sessionFactory)

//sessionFactory.$inject = ["$resource"];
function sessionFactory($resource)
{
    const apiUrl = 'login.json';
    return $resource(apiUrl,{},{
      'save' : {method : 'GET'}
    })
}