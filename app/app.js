var app = angular.module("vts", ['ui.router','app.api','app.user','ngSanitize']);
app.run(function($rootScope,$window,$http,$api,$user) {


    $rootScope.imageAsset = function(size,asset){
        var url = "http://localhost:8000/";
        return url + "img/media/" + size + "/" + asset;
    };


    $rootScope.user = new $user.userObj();


    if ($window.localStorage.user) {
        console.log($window.localStorage.user);
       $rootScope.user.fill(JSON.parse($window.localStorage.user));
    }





});



app.factory('authInterceptor', function ($rootScope, $q, $window) {


    //



    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($rootScope.user.is_user) {

                config.headers.Authorization = $rootScope.user.token;

                if ($rootScope.user.is_expired()){
                    config.headers.refreshToken = $rootScope.user.token_renew;

                }

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


app.controller("headerController",function($rootScope,$scope,$window,$state,$api){


    $rootScope.loged = ($window.sessionStorage.token != null);

    $scope.search = function(q){
        console.log(q);
        $state.go('search',{type:'all',q:q,page:0});
    };

    $scope.logout = function(){
        $rootScope.user = new $rootScope.userObj();
        $window.localStorage.removeItem("user");
    };

    $scope.notifications = [];
    $scope.getNotifications = function(){
        $api.get("notifications",[], function(res){
            $scope.notifications = res.data;
        });
    }

});
