(function(){
    'use strict';
    angular
    .module('MyApp').
    config(['$routeProvider','$locationProvider',
    function ($routeProvider,$locationProvider){

        $routeProvider
        .when('/', {
           templateUrl: 'app/Component/home/homeview.html',
           controller:  'homeViewController'
        })
        .when('/login',{
            templateUrl: 'app/Component/login/loginview.html',
           //   templateUrl: '/home/:firstname/:lastname/:gender'
           controller: 'loginViewController',
          //  controllerAd: 'dashsctrl'
        })
        .when('/home/:firstname/:lastname/:gender' ,{
            templateUrl: 'app/Component/home/homeview.html',
            controller:  'homeViewController'

        })
        .when('/register',{
            templateUrl: 'app/Component/register/registerview.html',
            controller: 'registerViewController',
          //  controllerAd: 'dashsctrl'

        })
        .otherwise('/')
        templateUrl: 'app/Component/home/homeview.html'
        controller:  'homeViewController'
        
        
        ;
    }]);
})();