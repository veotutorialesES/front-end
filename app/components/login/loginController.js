app.controller("loginController", function($scope,$api,$state,$rootScope,$window,$stateParams){
    $('#myModal').modal('hide');

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
            }else if(res.exist && res.activated == 0){
                console.log("EL USUARIO EXISTE PERO NO ESTA ACTIVADO");
                $('#myModal').modal('hide');
                $state.go("activation");
            }else{
                console.log("EL USUARIO NO EXISTE");


                $scope.wrong = true;
            }
        });

    }




    $scope.activateEmail = function(){
        var arr = [];

        if (!$stateParams.token && !$stateParams.email){
            return null;
        }

        arr["activate_token"] = $stateParams.token;
        arr["email"] = $stateParams.email;
        $api.post("login/activate",arr,function(res){


           // $state.go("home");

            // TODO show a success message
        });
    };


    $scope.recoverToken = false;

    $scope.getRecoverToken = function(obj){

        var arr = [];
        arr["email"] = obj.email;

        $api.post("login/recover/store",arr,function(res){
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

        $api.post("login/recover",arr,function(res){

        })
    };

});