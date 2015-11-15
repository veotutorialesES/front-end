angular.module("app.user", ['app.api']).service("$user", function($api,$rootScope,$http){
    var self = this;

    self.userObj = function() {

        return {
            is_user: false,
            is_admin: false,
            is_premium: false,
            activated: false,
            name:"",
            token: "",
            token_renew: "",
            token_expiration: 0,
            notifications: {
                list: [],
                config: {
                    stack: false,
                    boletin: false
                }
            },
            fill: function(data){
                this.is_user = data.is_user;
                this.name = data.name;
                this.is_admin = data.is_admin;
                this.is_premium = data.is_premium;
                this.activated = data.activated;
                this.token = data.token;
                this.token_renew = data.token_renew;
                this.token_expiration = data.token_expiration;

            },
            is_expired: function(){

                var now = Math.floor(Date.now() / 1000);
                return (this.token_expiration < now);
            },
            getData: function () {
                // TODO descarga la info del usuario
                // Subscripciones
                // Configuraciones: notifications
            },
            login: function(email, pass){
                // TODO implement this
                // rellena al usuario con la info
            },
            refreshToken: function(callback){

                console.info("El token se ha renovado");

                $http({
                    method: "POST",
                    url: $api.base_url+"user/refreshToken",
                    headers: {
                        'Content-Type' : 'application/x-www-form-urlencoded'
                    }
                }).then(function (res) {
                    res = res.data;
                    if (res.status) {
                        this.fill(res.data);
                        $window.localStorage.user = JSON.stringify($rootScope.user);
                    }else{
                        this.is_user = false;
                    }
                   if (callback){ callback(res.data.is_user); }

                });

            }
        }

    };



});