app.controller("subscriptionController", function($scope,$api,$state){



    $scope.add = function(type, type_id){
        $scope.is_subscribed = true;
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        $api.post("subscription/",arr,function(res){

            if (res.status){
                $scope.is_subscribed = true;

            }

        })
    };

    $scope.delete = function(type, type_id){
        $scope.is_subscribed = false;

        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;

        $api.delete("subscription/delete",arr,function(res){
            if (res.status){
                $scope.is_subscribed = false;

            }

        })
    };

    $scope.list = function(type){
        var arr = [];
        arr["type"] = type;
        $api.get("subscription",arr,function(res){


        })
    };


    $scope.check = function(type,type_id){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        $api.get("subscription/me",arr,function(res){

            $scope.is_subscribed = res.status;

        })
    };

});