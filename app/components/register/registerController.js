app.controller("registerController", function($scope,$api,$state){

    $scope.user = {};
    $scope.wrong = false;
    $scope.msg = [];
    $scope.send = function(check) {
        $scope.wrong = false;
        $scope.msg = [];

        // TODO validate first

        if (!check){
            $scope.wrong = true;
            return false;
        }


        var arr = [];
        arr["name"] = $scope.user.name;
        arr["pass"] = $scope.user.pass;
        arr["email"] = $scope.user.email;

        $api.post("register",arr,function(res){

            console.info("registerController->send():");
            console.log(res);
            if (!res.status){
                $scope.wrong = true;
                for (var key in res) {
                    var obj = res[key];

                    $scope.msg.push(replace(obj.toString()));
                }


            }else{
                $state.go("activation");
            }

        });

    }



    function replace(str){
        str.replace("[","");
        str.replace("]","");
        str.replace('"',"");
        return str;
    }
});