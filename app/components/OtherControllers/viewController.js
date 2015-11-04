app.controller("viewController", function($scope,$api,$state){


    $scope.is_subscribed = false;

    $scope.add = function(type, type_id){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        $api.post("view",arr,function(res){


        })
    };

    $scope.delete = function(type, type_id){

        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;

        $api.delete("view",arr,function(res){


        })
    };

    $scope.list = function(type){
        var arr = [];
        arr["type"] = type;
        $api.get("view",arr,function(res){


        })
    };


    $scope.check = function(type,type_id){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        $api.get("view/me",arr,function(res){

            $scope.is_subscribed = res.status;

        })
    };

});