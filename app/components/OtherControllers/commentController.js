app.controller("commentController", function($scope,$api,$stateParams){



    $scope.add = function(type,type_id, comment){
        console.info("commentController: addComment(): ");
        var arr = [];

        arr["description"] = comment;
        arr["type_id"] = type_id;
        arr["type"] = type;
        console.log(arr);

        $api.post("comment",arr,function(res){
            console.info("commentController->addComment(): ");
            console.log(res);

        })

    };



});