var app = angular.module("vts", ['ui.router','app.api','ngSanitize']);
app.run(function($rootScope,$window) {
    $rootScope.loading = true;
    $rootScope.loged = $window.sessionStorage.is_user;
    $rootScope.is_premium = $window.sessionStorage.is_premium;

    $rootScope.imageAsset = function(size,asset){
        var url = "http://localhost:8000/";
        return url + "img/media/" + size + "/" + asset;
    };

    // TODO build user OBJ from session

});



app.factory('authInterceptor', function ($rootScope, $q, $window) {
    return {
        request: function (config) {

            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = $window.sessionStorage.token;
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


app.controller("headerController",function($rootScope,$scope,$window,$state){


    $rootScope.loged = ($window.sessionStorage.token != null);

    $scope.search = function(q){
        console.log(q);
        $state.go('search',{type:'all',q:q});
    }

    $scope.logout = function(){
        $rootScope.loged = false;
        $rootScope.token = null;
        $window.sessionStorage.removeItem("token");
    }

});
