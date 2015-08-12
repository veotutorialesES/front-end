var app = angular.module("vts", ['ui.router','app.data','textAngular']);

app.controller("headerController",function($rootScope,$scope){

    $rootScope.token = localStorage.getItem("token");
    if ($rootScope.token){
        $rootScope.loged = true;
    }



    $scope.logout = function(){
        $rootScope.loged = false;
        $rootScope.token = null;
        localStorage.removeItem("token");
    }

});

app.controller("playlist", function($scope){

    $scope.list = {
        "Modulo1": [
            {id: 1, title: "Introduccion"},
            {id: 1, title: "Variables"},
            {id: 1, title: "Tipos de datos"},
            {id: 1, title: "Orientado a objetos"}
        ],
        "Modulo2": [
            {id: 1, title: "Introduccion"},
            {id: 1, title: "Variables"},
            {id: 1, title: "Tipos de datos"},
            {id: 1, title: "Orientado a objetos"}
        ]


    }
});


