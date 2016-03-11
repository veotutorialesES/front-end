app.service("$api", function($http,$rootScope){
    var self = this;
    var host = "localhost:8000";
    // host = "api.veotutoriales.es";

    self.app_id = "123456";
    self.db_name = "midb5";

    self.base_url = "http://"+host+"/api/v1/";

    self.get = function(route, params, callback){ self.http("GET", route, params, callback); };
    self.post = function(route, params, callback){ self.http("POST", route, params, callback); };
    self.put = function(route, params, callback){ self.http("PUT", route, params, callback); };
    self.delete = function(route, params, callback){ self.http("DELETE", route, params, callback); };

    self.http = function(type, route, params, callback){

        var postData = "";
        for (var k in params){
            postData += "&"+k+"="+params[k];
        }

        // check if token need refresh
        /**
         *  Primero con este metodo comprobamos que el token es valido, sino intentamos renovarlo
         */
        var token = $rootScope.user.token ? $rootScope.user.token.token : null;

        $rootScope.user.refresh_token(function(res){

            $http({
                method: type,
                url: self.base_url+route,
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'app_id': self.app_id,
                    'authorization': "Bearer "+token
                },
                data:postData
            }).success(function (res) {
                console.log("(success) HTTP: ApiService->"+type+"("+params+"): "+self.base_url+route+ postData);
                console.log(res);

                callback(res);


            }).error(function(data){
                console.log("(error) HTTP: ApiService->"+type+"("+params+"): "+self.base_url+route+ postData);
                console.log(data);

                callback(data);

            });

        });

    }







    self.file = function(route, file, callback){
                $http.post(self.base_url+route, file, {
                        withCredentials: true,
                       headers: {'Content-Type': undefined },
                   transformRequest: angular.identity
               }).success(function (res) {
                   console.log("ApiService->file(): ");
                  console.log(res);
                      callback(res);
                }).error(function(data){console.error("ApiService->file(): ");
                   callback(data);

                });

            };

});