angular.module("app.data", [])

    .service("$data", function(){

        console.log("Service called");

        this.login = function(){
            console.log("You are login");
        }

    });;
var app = angular.module("vts", ['ui.router']);



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
app.controller("homeController", function($scope){
    $scope.data = "Dataaaaaaaaaaaa";

});;
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