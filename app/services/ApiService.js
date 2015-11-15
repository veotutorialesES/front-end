angular.module("app.api", []).service("$api", function($http,$rootScope){
    var self = this;
    var host = "localhost:8000";
    // host = "api.veotutoriales.es";

    var appID = "asdfalskdjf";

    self.base_url = "http://"+host+"/api/v1/";

    self.get = function(route, params, callback){


        var dat = "";
        for (var k in params){
            dat += "&"+k+"="+params[k];
        }
        var url = self.base_url+route+"?app=123123"+dat;
        console.log("HTTP: ApiService->get()"+url);


        if ($rootScope.user.is_expired() && $rootScope.user.is_user){

            $rootScope.user.refreshToken(function(res){
                console.info("TOKEN REFRESCADO");
                    $http.get(url).then(function(res){ callback(res.data); });


            });
        }else{
            $http.get(url).then(function(res){ callback(res.data); });
        }





    };
    self.post = function(route, params, callback){
        self.http("POST", route, params, callback);
    };
    self.put = function(route, params, callback){
        self.http("PUT", route, params, callback);
    };
    self.delete = function(route, params, callback){
        self.http("DELETE", route, params, callback);
    };

    self.http = function(type, route, params, callback){

        var dat = "";
        for (var k in params){
            dat += "&"+k+"="+params[k];
        }

        var postData = "?app="+appID+ dat;
        console.log("HTTP: ApiService->"+type+"(): "+self.base_url+route+ postData);



        if ($rootScope.user.is_expired() && $rootScope.user.is_user){

            $rootScope.user.refreshToken(function(res){
                if(res){
                    $http({
                        method: type,
                        url: self.base_url+route,
                        headers: {
                            'Content-Type' : 'application/x-www-form-urlencoded'
                        },
                        data:postData
                    }).success(function (res) {
                        console.log("ApiService->"+type+"(): ");
                        console.log(res);

                        callback(res);


                    }).error(function(data){
                        console.error("ApiService->"+type+"(): ");
                        callback(data);

                    });
                }else{
                    // No vale el token todo

                }
            });
        }else{
            $http({
                method: type,
                url: self.base_url+route,
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                data:postData
            }).success(function (res) {
                console.log("ApiService->"+type+"(): ");
                console.log(res);

                callback(res);


            }).error(function(data){
                console.error("ApiService->"+type+"(): ");
                callback(data);

            });        }




    };


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