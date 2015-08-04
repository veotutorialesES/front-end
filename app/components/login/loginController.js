app.controller("loginController", function($scope,$http){
    $scope.data = "Dataaaaaaaaaaaa";

    var token = localStorage.getItem("csfr");
    console.log(token);

    $http.get("http://localhost:8000/api/v1/csfr", {
    }).then(function (res) {
        console.log(res);
        localStorage.setItem("csfr",res.data.token);
        token = res.data.token;
    });

    $scope.send = function() {
        console.log(token);
        var Udata = {
            user: "asdf",
            pass: "asdf",
            _token: token
        };

        $http({
            method: 'POST',
            url: 'http://localhost:8000/api/v1/register',
            headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            data: Udata
        });


    }

});