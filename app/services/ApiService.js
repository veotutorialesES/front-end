angular.module("app.api", []).service("$api", function($http){
    var self = this;

    var host = location.host + ":8000";

    self.base_url = "http://"+host+"/api/v1/";
    // get
    this.get = function(route, params, callback){
        console.log("ApiService: get()");
        console.log("ApiService->get(): (url) " + self.base_url+route);

        $http.get(self.base_url+route).then(function(res){
            callback(res.data);
        })
    };

    // create
    this.post = function(route, params, callback){

        console.log("ApiService: post()");

        var dat = "";
        for (var k in params){
            dat += "&"+k+"="+params[k];
        }

        var postData = "?token=1234" + dat;
        console.log("ApiService->post(): (url) " + postData);

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