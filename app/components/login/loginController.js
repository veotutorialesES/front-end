app.controller("loginController", function($scope,$api,$state,$rootScope,$window,$stateParams){
    $('#myModal').modal('hide');

    $scope.wrong = false;


    $scope.send = function(email,pass) {
        $scope.wrong = false;

        var arr = [];
        arr["email"] = email;
        arr["pass"] = pass;

        $api.post("user/login",arr,function(res){
            console.info(res);
            if (res.status) {

                $rootScope.user = new $rootScope.userObj();
                $rootScope.user.fill(res.data);

                $window.localStorage.user = JSON.stringify($rootScope.user);


                if (!$rootScope.user.activated){
                    $state.go("activation");
                }

                $('#myModal').modal('hide');
            }else{
                console.log("EL USUARIO NO EXISTE");
                $scope.wrong = true;
            }
        });

    };




    $scope.activateEmail = function(){
        var arr = [];

        if (!$stateParams.token && !$stateParams.email){
            return null;
        }

        arr["activate_token"] = $stateParams.token;
        arr["email"] = $stateParams.email;
        $api.post("user/activate",arr,function(res){


           // $state.go("home");

            // TODO show a success message
        });
    };


    $scope.recoverToken = false;

    $scope.getRecoverToken = function(obj){

        var arr = [];
        arr["email"] = obj.email;

        $api.post("recover",arr,function(res){
            if (res.status){
                $scope.recoverToken = true;

            }
        })
    };

    $scope.recover = function(obj){
        var arr = [];
        arr["email"] = obj.email;
        arr["recover_token"] = obj.token;
        arr["pass"] = obj.pass;

        if (obj.pass != obj.pass2){
            alert("Pass no coinciden");
            return null; // TODO show error
        }

        $api.post("user/recover",arr,function(res){

        })
    };

});