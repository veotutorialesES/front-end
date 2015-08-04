app.controller("loginController", function($scope,$http,$state,$rootScope){
    $scope.data = "Dataaaaaaaaaaaa";





    $scope.send = function(email,pass) {


        var postData = 'email='+email+'&pass='+pass;
        $http({
            method: 'POST',
            url: 'http://localhost:8000/api/v1/login',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            data:postData
        }).success(function (res) {
            console.log("Iniciando sesion...");
            console.log(res);
            localStorage.setItem("token",res.token);
            $rootScope.loged = true;
            $rootScope.token = res.token;
           // $state.go("home");

            // TODO recargar pagina

        }).error(function(data){
            console.log("Error");
            console.log(data);

        });
    }

});