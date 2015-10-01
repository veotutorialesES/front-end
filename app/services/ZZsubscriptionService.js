angular.module("app.subscription", ['app.api']).service("$subscription", function($api){
    var self = this;


    self.add = function(type, type_id,callback){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        console.info("app.subscription->add("+type+","+type_id+")");
        $api.post("subscription/",arr,function(res){
            console.info("app.subscription->add(): ");
            console.log(res);
            callback(res);

        })
    };

    self.delete = function(type, type_id,callback){
        console.info("app.subscription->delete("+type+","+type_id+")");
        $api.post("subscription/"+type+"/"+type_id,[],function(res){
            console.info("app.subscription->delete(): ");
            console.log(res);
            callback(res);

        })
    };

    self.list = function(type,callback){
        console.info("app.subscription->list("+type+")");

        $api.get("subscription/"+type,[],function(res){
            console.info("app.subscription->list(): ");
            console.log(res);
            callback(res);

        })
    };

    self.check = function(type,type_id,callback){
        console.info("app.subscription->check("+type+","+type_id+")");

        $api.get("subscription/"+type+"/"+type_id,[],function(res){
            console.info("app.subscription->check(): ");
            console.log(res);
            if (res != "null"){

                callback(true);

            }else{
                callback(false);

            }
        })
    };
});