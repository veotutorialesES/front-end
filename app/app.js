var app = angular.module("vts", ['ui.router']);



app.controller("playlist", function($scope){
    $scope.list = [
        {id:1,title:"Introduccion"},
        {id:1,title:"Variables"},
        {id:1,title:"Tipos de datos"},
        {id:1,title:"Orientado a objetos"}
    ];
})