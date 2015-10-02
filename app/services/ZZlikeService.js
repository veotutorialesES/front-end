angular.module("app.like", ['app.api']).service("$like", function($api){
    var self = this;


    self.add = function(type, type_id,callback){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        console.info("app.like->add("+type+","+type_id+")");
        $api.post("like/",arr,function(res){
            console.info("app.like->add(): ");
            console.log(res);
            callback(res);

        })
    };

    self.delete = function(type, type_id,callback){
        console.info("app.like->delete("+type+","+type_id+")");
        $api.post("like/"+type+"/"+type_id,[],function(res){
            console.info("app.like->delete(): ");
            console.log(res);
            callback(res);

        })
    };

    self.list = function(type,callback){
        console.info("app.like->list("+type+")");

        $api.get("like/"+type,[],function(res){
            console.info("app.like->list(): ");
            console.log(res);
            callback(res);

        })
    };

    self.check = function(type,type_id,callback){
        console.info("app.like->check("+type+","+type_id+")");

        $api.get("like/"+type+"/"+type_id,[],function(res){
            console.info("app.like->check(): ");
            console.log(res);
            if (res != "null"){

                callback(true);

            }else{
                callback(false);

            }
        })
    };

});