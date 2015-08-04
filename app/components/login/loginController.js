app.controller("loginController", function($scope,$http){
    $scope.data = "Dataaaaaaaaaaaa";

    var token = localStorage.getItem("csfr");
    console.log(token);



    $scope.send = function() {


        $http.get("http://localhost:8000/api/v1/csfr", {
        }).then(function (res) {
            console.log(res);
            localStorage.setItem("csfr",res.data.token);
            token = res.data.token;


            console.log(token);


            $http({
                method: 'POST',
                url: 'http://localhost:8000/api/v1/register',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'X-XSRF-TOKEN' : token
                },
                data: {}
            }).success(function(response) {
                console.log(response);
            });
        });

    }

});