var app = angular.module("vts", ['ui.router','textAngular','app.api','app.like','app.subscription','app.view']);



/*
app.factory('authInterceptor', function ($rootScope, $q, $window) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
            }
            return config;
        },
        response: function (response) {
            if (response.status === 401) {
                // TODO handle the case where the user is not authenticated
            }
            return response || $q.when(response);
        }
    };
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});
*/

app.controller("headerController",function($rootScope,$scope,$window){

    $rootScope.token =  $window.sessionStorage.token;
    if ($rootScope.token){
        $rootScope.loged = true;
    }



    $scope.logout = function(){
        $rootScope.loged = false;
        $rootScope.token = null;
        $window.sessionStorage.removeItem("token");
    }

});
