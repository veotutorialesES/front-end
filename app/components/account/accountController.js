app.controller("accountController", function($scope,$subscription,$api,$state,$rootScope){
    $scope.subscriptionItems = [];

    $scope.subscriptions = function(type) {
        console.info("subscriptionController: subscriptions()")

        $subscription.list(type, function (res) {
            console.info("subscriptionController->subscriptions()")
            console.log(res);
            $scope.subscriptionItems = res;
        })
    };


    $scope.unsubscribe = function(type, type_id){
        console.info("subscriptionController: unsubscribe("+type+","+type_id+")");

        $subscription.delete(type,type_id, function(res){
            console.info("subscriptionController->unsubscribe()")
            console.log(res);
            $scope.subscriptions(type); // TODO eliminar manualmente del array
        });
    };


    $scope.updateName = function(name,pass){

        var arr = [];
        arr["name"] = name;
        arr["pass"] = pass;

        $api.put("user/me",arr,function(res){

        });
    };

    $scope.updateEmail = function(email,pass){

        var arr = [];
        arr["email"] = email;
        arr["pass"] = pass;

        $api.put("user/me",arr,function(res){

        });
    }
    $scope.updatePassword = function(old_pass,new_pass,new_pass2){

        if (new_pass != new_pass2){
            alert("Pass no coinciden");
            return null;
        }

        var arr = [];
        arr["new_pass"] = new_pass;
        arr["old_pass"] = old_pass;

        $api.put("user/me",arr,function(res){

        });
    }
    $scope.destroy = function(pass){

        var arr = [];
        arr["pass"] = pass;

        $api.delete("user/me",arr,function(res){
            $rootScope.loged = false;
            // TODO comprobar que se ha eliminado antes
            $state.go("home");

        });
    }

});