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
        
        
        // 2 data ways
        
        // Download all user no sensible data (tutoriales vistos,)
        
        // Download web data (courses, tutorials) from cache
        
        // Download dudas from cache (renew every X)


    });;
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


;
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
        .state('dudas', {
            url: "/dudas",
            templateUrl: "app/components/dudas/dudasView.html"
        })
        .state('avisos', {
            url: "/avisos",
            templateUrl: "app/components/avisos/avisosView.html"
        })
        .state('course', {
            url: "/course",
            templateUrl: "app/components/course/courseView.html"
        })

        .state('welcome', {
            url: "/welcome",
            templateUrl: "app/components/account/welcomeView.html"
        })
        .state('search', {
            url: "/search",
            templateUrl: "app/components/search/searchView.html"
        })
        .state('suscripcion', {
            url: "/suscripcion",
            templateUrl: "app/components/suscripcion/suscripcionView.html"
        })
        .state('suscripcion.courses',       {url: '/courses',views: {'suscripcion': { templateUrl: 'app/components/suscripcion/suscripcionCoursesView.html'}}})
        .state('suscripcion.dudas',       {url: '/dudas',views: {'suscripcion': { templateUrl: 'app/components/suscripcion/suscripcionDudasView.html'}}})

        .state('account', {
            url: "/account",
            templateUrl: "app/components/account/accountView.html"
        })

        .state('account.info',       {url: '/info',views: {'account': { templateUrl: 'app/components/account/accountInfoView.html'}}})
        .state('account.email',       {url: '/email',views: {'account': { templateUrl: 'app/components/account/accountEmailView.html'}}})
        .state('account.pass',       {url: '/pass',views: {'account': { templateUrl: 'app/components/account/accountPassView.html'}}})
        .state('account.notifications',       {url: '/notifications',views: {'account': { templateUrl: 'app/components/account/accountNotificationsView.html'}}})
        .state('account.social',       {url: '/social',views: {'account': { templateUrl: 'app/components/account/accountSocialView.html'}}})
        .state('account.config',       {url: '/config',views: {'account': { templateUrl: 'app/components/account/accountConfigView.html'}}})

        .state('help', {
            url: "/help",
            templateUrl: "app/components/help/helpView.html"
        })
        .state('help.sobre',       {url: '/sobre',views: {'help': { templateUrl: 'app/components/help/aboutView.html'}}})
        .state('help.faq',       {url: '/faq',views: {'help': { templateUrl: 'app/components/help/faqView.html'}}})
        .state('help.tos',       {url: '/tos',views: {'help': { templateUrl: 'app/components/help/tosView.html'}}})
        .state('help.cookies',       {url: '/cookies',views: {'help': { templateUrl: 'app/components/help/cookiesView.html'}}})
        .state('help.contact',       {url: '/contact',views: {'help': { templateUrl: 'app/components/help/contactView.html'}}})

});;
app.controller("accountController", function($scope,$data){
    $scope.data = "Dataaaaaaaaaaaa";




});;
app.controller("accountController", function($scope,$data){
    $scope.data = "Dataaaaaaaaaaaa";




});;
app.controller("courseController", function($scope){
    $scope.data = "Dataaaaaaaaaaaa";
});;
app.controller("dudasController", function($scope){
    $scope.data = "Dataaaaaaaaaaaa";
    angular.element(document).ready(function () {
        console.log('Code highlighting');
        prettyPrint();
    });
});;
app.controller("helpController", function($scope,$data){
    $scope.data = "Dataaaaaaaaaaaa";




});;
app.controller("homeController", function($scope,$data){
    $scope.data = "Dataaaaaaaaaaaa";


    $data.getCourses();


    $scope.calendar = {
        lunes:[
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            },
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            }
        ],
        martes:[
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            }
        ],
        miercoles:[

        ],
        jueves:[
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            }
        ],
        viernes:[
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            },
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            },
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            }
        ]
    }

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
            $('#myModal').modal('hide')

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
app.controller("suscripcionController", function($scope,$data){
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