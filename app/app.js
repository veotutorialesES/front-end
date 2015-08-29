var app = angular.module("vts", ['ui.router','app.data','textAngular','app.api']);

app.controller("headerController",function($rootScope,$scope){

    $rootScope.token = localStorage.getItem("token");
    if ($rootScope.token){
        $rootScope.loged = true;
    }



    $scope.logout = function(){
        $rootScope.loged = false;
        $rootScope.token = null;
        localStorage.removeItem("token");
    }

});




