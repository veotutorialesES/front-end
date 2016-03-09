app.service("$user", function($api,$window,$http){


    this.user = function() {

        var obj = $window.localStorage.user ? JSON.parse($window.localStorage.user) : null;

        var name1 = $window.localStorage.user ? obj.name : null;
        var email1 = $window.localStorage.user ?obj.email : null;
        var token1 = $window.localStorage.user ?obj.token : null;
        var user_id1 = $window.localStorage.user ? obj.user_id : null;


        return {
            user_id: user_id1,
            name:name1,
            email: email1,
            token: token1,
            is_user: function(){
                // TODo mejor forma
              return (this.user_id > 0)
            },
            is_admin: function(){
              return false;
            },
            is_premium: function(){
                return false;
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
                // var now = Math.floor(Date.now() / 1000);
                // TODO: Devuelve el tiempo que falta para que expire el token en segundos

                return 500;
            },
            refresh_token: function(callback){

                var self = this;

                if (this.token_expiration() < 300){
                    if(callback) callback();
                    return false;
                }


                if (!this.is_user()){
                    if(callback) callback();
                    return false;
                }



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