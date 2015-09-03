'use strict';

/**
 * @ngdoc overview
 * @name bluesoftApp
 * @description
 * # bluesoftApp
 *
 * Main module of the application.
 */
angular
  .module('bluesoftApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        auth: true
      })  
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/item/:id/editar', {
        templateUrl: 'views/item.html',
        controller: 'ItensdetailCtrl'
      })      
      .otherwise({
        redirectTo: '/login'
      });
  })
  .run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }

        })

        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            // redirect to login page if not logged in


            //show div: necessita de refatoração
            if ($location.path() !== '/login') {
                $rootScope.isLoggedIn = true;
            }else{
                $rootScope.isLoggedIn = false;
            }

        })


    }]);