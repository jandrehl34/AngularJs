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
           //controllerAs: homeViewController ->> alias
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
        .when('/dataview',{
            templateUrl: 'app/Component/home/dataview.html',
            controller: 'dataviewcontroller',
            controllerAs: 'dashsctrl'

        })
        .when('/ListView',{
            templateUrl: 'app/Component/home/ListView.html',
            controller: 'ListViewController',
            controllerAs: 'ListCtrl'

        })
        .when('/Checkbox',{
            templateUrl: 'app/Component/home/checkbox.html',
            controller: 'checkboxcontroller',

        })
        .when('/navdirective',{
            templateUrl: 'app/Shared/navview.html',
            controller: 'navController',

        })
        .when('/modal',{
            templateUrl: 'app/component/Modal/modalview.html',
            controller: 'modalinstanceController',

        })
        .when('/sessionhandling',{
            templateUrl: 'app/component/sessionhandling/login.html',
            controller: 'loginSessionController',
            controllerAs : 'LSController'

        })
        .otherwise('/')
        templateUrl: 'app/Component/home/homeview.html'
        controller:  'homeViewController'
        
        
        ;
    }]);
})();