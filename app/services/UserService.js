angular.module("app.user", ['app.api']).service("$user", function($api,$window,$http){
   // var self = this;

    /*
    this.userObj = function() {

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
                var self = this;
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
                        self.fill(res.data);
                        $window.localStorage.user = JSON.stringify($rootScope.user);
                    }else{
                        this.is_user = false;
                    }
                   if (callback){ callback(res.data.is_user); }

                });

            }
        }

    };
*/

    this.user = function() {

        var obj = $window.localStorage.user ? JSON.parse($window.localStorage.user) : null;

        var name1 = $window.localStorage.user ? obj.name : null;
        var email1 = $window.localStorage.user ?obj.email : null;
        var token1 = $window.localStorage.user ?obj.token : null;
        var user_id1 = $window.localStorage.user ? obj.user_id : null;
        // try to recover user from localstorage

        return {
            user_id: user_id1,
            name:name1,
            email: email1,
            token: token1,
            is_user: function(){
                // TODo mejor forma
              return (this.user_id > 0)
            },
            login: function(email, pass, callback){
                // http connection

                var params = [];
                params["email"] = email;
                params["password"] = pass;

                var self = this;
                $api.post("auth/login",params,function(res){
                    console.log("Login response: ");
                    console.log(res);

                    self.name = res.name;
                    self.user_id = res.user_id;
                    self.email = res.email;
                    self.token = res.token;
                    self.params = [];

                    callback(res.name != null)

                })
            },
            cache: function(){
                $window.localStorage.setItem("user",JSON.stringify(this));
            },
            clear: function(){
                this.name = null;
                this.user_id = null;
                this.email = null;
                this.token = null;
                $window.localStorage.removeItem("user");
            },
            token_expiration: function(){

            },
            refresh_token: function(callback){

                if (!this.is_user()){
                    if(callback) callback();
                    return false;
                }

                var self = this;
                // return callback if not expired
               // var now = Math.floor(Date.now() / 1000);
                var postData = "&refresh_token=" + self.token.refresh_token;
                $http({
                    method: "POST",
                    url: $api.base_url+"auth/refresh_token",
                    headers: {
                        'Content-Type' : 'application/x-www-form-urlencoded',
                        'app_id': $api.app_id,
                        'authorization': "Bearer "+ self.token.token
                    },
                    data:postData
                }).success(function (res) {
                    console.warn(res);

                    callback(res);


                }).error(function(res){
                    console.warn(res);

                    callback(res);

                });


            }
        }
    };



});