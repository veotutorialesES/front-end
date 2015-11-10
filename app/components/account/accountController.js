app.controller("accountController", function($scope,$api,$state,$rootScope){




 
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
        arr["pass"] = old_pass;

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