var app = angular.module("vts", ['ui.router','app.api','ngSanitize']);
app.run(function($rootScope,$window,$api) {



    $rootScope.userObj = function() {

        return {
            is_user: false,
            is_admin: false,
            is_premium: false,
            is_loged: false,
            activated: false,
            name:"",
            token: "",
            token_renew: "",
            token_expiration: 0,
            fill: function(data){
                this.is_user = data.is_user;
                this.name = data.name;
                this.is_admin = data.is_admin;
                this.is_premium = data.is_premium;
                this.is_loged = data.is_user;
                this.activated = data.activated;
                this.token = data.token;
                this.token_renew = data.token_renew;
                this.token_expiration = data.token_expiration;

            },
            is_expired: function(){

                var now = Math.floor(Date.now() / 1000) - 20;
                return (this.token_expiration < now);
            }
        }

    };


    $rootScope.imageAsset = function(size,asset){
        var url = "http://localhost:8000/";
        return url + "img/media/" + size + "/" + asset;
    };


    $rootScope.user = new $rootScope.userObj();

    if ($window.sessionStorage.user) {
        $rootScope.user.fill(JSON.parse($window.sessionStorage.user));
    }

    console.log($window.sessionStorage.user);

    setInterval(function(){
        if ($rootScope.user.is_expired() && $rootScope.user.is_user){

            $api.post("user/refreshToken",[],function(res){
                console.info(res);
                if (res.status) {
                    $rootScope.user.fill(res.data);
                    $window.sessionStorage.user = JSON.stringify($rootScope.user);
                }else{
                    $rootScope.user = new $rootScope.userObj();
                }

            });
        }


    },10000);

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


app.controller("headerController",function($rootScope,$scope,$window,$state){


    $rootScope.loged = ($window.sessionStorage.token != null);

    $scope.search = function(q){
        console.log(q);
        $state.go('search',{type:'all',q:q});
    };

    $scope.logout = function(){
        $rootScope.user = new $rootScope.userObj();
        $window.sessionStorage.removeItem("user");
    };

});
