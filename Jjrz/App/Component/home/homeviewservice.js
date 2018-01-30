angular
  .module('MyApp')
  .service('homeservice',homeservice)
  
  homeservice.$inject=["registerfactory"];
  function homeservice(registerfactory)
  {

    var service = {
      register: register
  }

  return service;

  function register(o){
  console.log("service");
  const getdb = registerfactory.save({});
  return getdb.$promise;
  }   
  }