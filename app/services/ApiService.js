angular.module("app.api", []).service("$api", function($http,$rootScope){
    var self = this;

    var host = location.host + ":8000";
    var appID = "asdfalskdjf";

    self.base_url = "http://"+host+"/api/v1/";
    // get
    self.get = function(route, params, callback){
        console.log("ApiService->get(): (url) " + self.base_url+route);

        $http.get(self.base_url+route+"?app="+appID+"&token="+$rootScope.token).then(function(res){
            callback(res.data);
        })
    };

    // create
    self.post = function(route, params, callback){

        var dat = "";
        for (var k in params){
            dat += "&"+k+"="+params[k];
        }

        var postData = "?app="+appID+ dat + "&token="+$rootScope.token;
        console.log("ApiService->post(): ("+self.base_url+route+") " + postData);

        $http({
            method: 'POST',
            url: self.base_url+route,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            data:postData
        }).success(function (res) {
            console.log("ApiService->post(): ");
            console.log(res);

            callback(res);


        }).error(function(data){
            console.error("ApiService->post(): ");
            callback(data);

        });



    };




});