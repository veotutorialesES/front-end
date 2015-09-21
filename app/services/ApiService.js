angular.module("app.api", []).service("$api", function($http){
    var self = this;

    var host = location.host + ":8000";

    self.base_url = "http://"+host+"/api/v1/";
    // get
    self.get = function(route, params, callback){
        console.log("ApiService: get()");
        console.log("ApiService->get(): (url) " + self.base_url+route);

        $http.get(self.base_url+route).then(function(res){
            callback(res.data);
        })
    };

    // create
    self.post = function(route, params, callback){

        console.log("ApiService: post()");

        var dat = "";
        for (var k in params){
            dat += "&"+k+"="+params[k];
        }

        var postData = "?token=1234" + dat;
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




    self.subscribe = function(type, type_id,callback){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        console.info("ApiService->subscribe("+type+","+type_id+")");
        self.post("subscription/",arr,function(res){
            console.info("ApiService->subscribe(): ");
            console.log(res);
            callback(res);

        })
    };

    self.unsubscribe = function(type, type_id,callback){
        console.info("ApiService->unsubscribe("+type+","+type_id+")");
        self.post("subscription/"+type+"/"+type_id,[],function(res){
            console.info("ApiService->unsubscribe(): ");
            console.log(res);
            callback(res);

        })
    };

    self.subscriptions = function(type,callback){
        console.info("ApiService->subscriptions("+type+")");

        self.get("subscription/"+type,[],function(res){
            console.info("ApiService->subscriptions(): ");
            console.log(res);
            callback(res);

        })
    };
    self.is_subscribed = function(type,type_id,callback){
        console.info("ApiService->is_subscribe("+type+","+type_id+")");

        self.get("subscription/"+type+"/"+type_id,[],function(res){
            console.info("ApiService->is_subscribe(): ");
            console.log(res);
            if (res != "null"){

                callback(true);

            }else{
                callback(false);

            }
        })
    };
});