var app = angular.module("vts", ['ui.router','app.data']);

app.controller("headerController",function($rootScope){
    console.log(localStorage.getItem("token"));
    $rootScope.loged = false;
    $rootScope.token = localStorage.getItem("token");
    if ($rootScope.token){
        $rootScope.loged = true;
    }


});

app.controller("playlist", function($scope){

    $scope.list = [
        {id:1,title:"Introduccion"},
        {id:1,title:"Variables"},
        {id:1,title:"Tipos de datos"},
        {id:1,title:"Orientado a objetos"}
    ];
})