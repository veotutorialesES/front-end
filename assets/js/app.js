angular.module("app.data", [])

    .service("$data", function($http){

        console.log("Service called");

        this.login = function(){
            console.log("You are login");
        }


        this.getCourses = function(){
            $http.get("http://localhost:8000/api/v1/test",{token:"askdjfh"}).then(function(res){
                console.log(res.data);
            });
        }


    });;
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
});
app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "app/components/login/loginView.html"
        })
        .state('register', {
            url: "/register",
            templateUrl: "app/components/register/registerView.html"
        })
        .state('home', {
            url: "/home",
            templateUrl: "app/components/home/homeView.html"
        })
        .state('course', {
            url: "/course",
            templateUrl: "app/components/course/courseView.html"
        })
});;
app.controller("courseController", function($scope){
    $scope.data = "Dataaaaaaaaaaaa";
});;
app.controller("homeController", function($scope,$data){
    $scope.data = "Dataaaaaaaaaaaa";


    $data.getCourses();


});;
app.controller("loginController", function($scope,$http,$state,$rootScope){
    $scope.data = "Dataaaaaaaaaaaa";

    localStorage.removeItem("token");



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
            $state.go("home");
            // TODO recargar pagina

        }).error(function(data){
            console.log("Error");
            console.log(data);

        });
    }

});;
app.controller("registerController", function($scope,$http){
    $scope.data = "Dataaaaaaaaaaaa";

    $scope.user = "";
    $scope.pass = "";
    $scope.email = "";

    $scope.send = function(user,email,pass,check) {
        console.log(check);

        // TODO validate first

        var postData = 'user='+$scope.user+'&pass='+ $scope.pass+'&email='+$scope.email;
        $http({
            method: 'POST',
            url: 'http://localhost:8000/api/v1/register',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            data:postData
        }).success(function (res) {
            console.log("OK");
            console.log(res);
        }).error(function(data){
            console.log("Error");
            console.log(data);

        });

    }

});