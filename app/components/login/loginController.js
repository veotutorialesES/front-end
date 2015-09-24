app.controller("loginController", function($scope,$api,$state,$rootScope,$window){

    $scope.wrong = false;


    $scope.send = function(email,pass) {
        $scope.wrong = false;

        var arr = [];
        arr["email"] = email;
        arr["pass"] = pass;

        $api.post("login",arr,function(res){

            if (res.status) {
                $window.sessionStorage.token = res.token;

                $rootScope.loged = true;
                $rootScope.token = res.token;
                $('#myModal').modal('hide');
            }else{
                $scope.wrong = true;
            }
        });

    }

});