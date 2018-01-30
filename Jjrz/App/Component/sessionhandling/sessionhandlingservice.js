angular 
.module('MyApp')
.service('sessionhandlingservice',sessionhandlingservice)

//sessionhandlingservice.$inject=["sessionFactory"];
function sessionhandlingservice(sessionFactory)
{
    var service = {
        login: login
    }

    return service;

    function login(o){
    const getdb = sessionFactory.save({},{
        'username' : o.username,
        'password': o.password
    });
    return getdb.$promise;
    }   
 // when declaring another function in service you need to add it to in list of services

}
