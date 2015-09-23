app.controller("registerController", function($scope,$api){

    $scope.user = "";
    $scope.pass = "";
    $scope.email = "";

    $scope.send = function(user,email,pass,check) {

        // TODO validate first

        var arr = [];
        arr["user"] = $scope.user;
        arr["pass"] = $scope.pass;
        arr["email"] = $scope.email;

        $api.post("register",arr,function(res){
            console.info("registerController->send():");
            console.log(res);
        });

    }

});