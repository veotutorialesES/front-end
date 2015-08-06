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
        .state('reminder', {
            url: "/reminder",
            templateUrl: "app/components/login/reminderView.html"
        })
        .state('register', {
            url: "/register",
            templateUrl: "app/components/register/registerView.html"
        })
        .state('home', {
            url: "/",
            templateUrl: "app/components/home/homeView.html"
        })
        .state('course', {
            url: "/course",
            templateUrl: "app/components/course/courseView.html"
        })
        .state('account', {
            url: "/account",
            templateUrl: "app/components/account/accountView.html"
        })

        .state('welcome', {
            url: "/welcome",
            templateUrl: "app/components/account/welcomeView.html"
        })
        .state('search', {
            url: "/search",
            templateUrl: "app/components/search/searchView.html"
        })
        .state('account.info',       {url: '/info',views: {'account': { templateUrl: 'app/components/account/accountInfoView.html'}}})
        .state('account.courses',       {url: '/courses',views: {'account': { templateUrl: 'app/components/account/accountCoursesView.html'}}})
        .state('account.email',       {url: '/email',views: {'account': { templateUrl: 'app/components/account/accountEmailView.html'}}})
        .state('account.notifications',       {url: '/notifications',views: {'account': { templateUrl: 'app/components/account/accountNotificationsView.html'}}})
        .state('account.social',       {url: '/social',views: {'account': { templateUrl: 'app/components/account/accountSocialView.html'}}})
        .state('account.config',       {url: '/config',views: {'account': { templateUrl: 'app/components/account/accountConfigView.html'}}})
});;
app.controller("accountController", function($scope,$data){
    $scope.data = "Dataaaaaaaaaaaa";




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

});;
app.controller("searchController", function($scope,$data){
    $scope.data = "Dataaaaaaaaaaaa";





});;
app.directive("dudasCard", function(){

    return {
        restrict: 'E',
        scope: {
          section: '=info'
        },
        templateUrl: 'app/shared/dudas/dudas-card.html',
        controller: function($scope){
            console.log($scope.section);
            $scope.customer = {
                name:"Salvador",
                address:"paseo de mons"
            }

        }
    };

});;
app.directive("tutorialCard", function(){

    return {
        restrict: 'E',
        scope: {
          section: '=info'
        },
        templateUrl: 'app/shared/tutoriales/tutoriales-card.html',
        controller: function($scope){
            console.log($scope.section);
            $scope.customer = {
                name:"Salvador",
                address:"paseo de mons"
            }

        }
    };

});