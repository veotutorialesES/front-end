angular.module("app.api", []).service("$api", function($http){
    var self = this;

    var host = location.host + ":8000";

    self.base_url = "http://"+host+"/api/v1/";
    // get
    self.get = function(route, params, callback){
        console.log("ApiService: get()");
        console.log("ApiService->get(): (url) " + self.base_url+route);

        $http.get(self.base_url+route).then(function(res){
            callback(res.data);
        })
    };

    // create
    self.post = function(route, params, callback){

        console.log("ApiService: post()");

        var dat = "";
        for (var k in params){
            dat += "&"+k+"="+params[k];
        }

        var postData = "?token=1234" + dat;
        console.log("ApiService->post(): ("+self.base_url+route+") " + postData);

        $http({
            method: 'POST',
            url: self.base_url+route,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            data:postData
        }).success(function (res) {
            console.log("ApiService->post(): ");
            console.log(res);

            callback(res);


        }).error(function(data){
            console.error("ApiService->post(): ");
            callback(data);

        });



    };




    self.subscribe = function(type, type_id,callback){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        console.info("ApiService->subscribe("+type+","+type_id+")");
        self.post("subscription/",arr,function(res){
            console.info("ApiService->subscribe(): ");
            console.log(res);
            callback(res);

        })
    };

    self.unsubscribe = function(type, type_id,callback){
        console.info("ApiService->unsubscribe("+type+","+type_id+")");
        self.post("subscription/"+type+"/"+type_id,[],function(res){
            console.info("ApiService->unsubscribe(): ");
            console.log(res);
            callback(res);

        })
    };

    self.subscriptions = function(type,callback){
        console.info("ApiService->subscriptions("+type+")");

        self.get("subscription/"+type,[],function(res){
            console.info("ApiService->subscriptions(): ");
            console.log(res);
            callback(res);

        })
    };
    self.is_subscribed = function(type,type_id,callback){
        console.info("ApiService->is_subscribe("+type+","+type_id+")");

        self.get("subscription/"+type+"/"+type_id,[],function(res){
            console.info("ApiService->is_subscribe(): ");
            console.log(res);
            if (res != "null"){

                callback(true);

            }else{
                callback(false);

            }
        })
    };
});;
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
angular.module("app.like", ['app.api']).service("$like", function($api){
    var self = this;


    self.add = function(type, type_id,callback){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        console.info("app.like->add("+type+","+type_id+")");
        $api.post("like/",arr,function(res){
            console.info("app.like->add(): ");
            console.log(res);
            callback(res);

        })
    };

    self.delete = function(type, type_id,callback){
        console.info("app.like->delete("+type+","+type_id+")");
        $api.post("like/"+type+"/"+type_id,[],function(res){
            console.info("app.like->delete(): ");
            console.log(res);
            callback(res);

        })
    };

    self.list = function(type,callback){
        console.info("app.like->list("+type+")");

        $api.get("like/"+type,[],function(res){
            console.info("app.like->list(): ");
            console.log(res);
            callback(res);

        })
    };

    self.check = function(type,type_id,callback){
        console.info("app.like->check("+type+","+type_id+")");

        $api.get("like/"+type+"/"+type_id,[],function(res){
            console.info("app.like->check(): ");
            console.log(res);
            if (res != "null"){

                callback(true);

            }else{
                callback(false);

            }
        })
    };

});;
angular.module("app.subscription", ['app.api']).service("$subscription", function($api){
    var self = this;


    self.add = function(type, type_id,callback){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        console.info("app.subscription->add("+type+","+type_id+")");
        $api.post("subscription/",arr,function(res){
            console.info("app.subscription->add(): ");
            console.log(res);
            callback(res);

        })
    };

    self.delete = function(type, type_id,callback){
        console.info("app.subscription->delete("+type+","+type_id+")");
        $api.post("subscription/"+type+"/"+type_id,[],function(res){
            console.info("app.subscription->delete(): ");
            console.log(res);
            callback(res);

        })
    };

    self.list = function(type,callback){
        console.info("app.subscription->list("+type+")");

        $api.get("subscription/"+type,[],function(res){
            console.info("app.subscription->list(): ");
            console.log(res);
            callback(res);

        })
    };

    self.check = function(type,type_id,callback){
        console.info("app.subscription->check("+type+","+type_id+")");

        $api.get("subscription/"+type+"/"+type_id,[],function(res){
            console.info("app.subscription->check(): ");
            console.log(res);
            if (res != "null"){

                callback(true);

            }else{
                callback(false);

            }
        })
    };
});;
angular.module("app.view", ['app.api']).service("$views", function($api){
    var self = this;


    self.add = function(type, type_id,callback){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        console.info("app.view->add("+type+","+type_id+")");
        $api.post("view/",arr,function(res){
            console.info("app.view->add(): ");
            console.log(res);
            callback(res);

        })
    };

    self.delete = function(type, type_id,callback){
        console.info("app.view->delete("+type+","+type_id+")");
        $api.post("view/"+type+"/"+type_id,[],function(res){
            console.info("app.view->delete(): ");
            console.log(res);
            callback(res);

        })
    };

    self.list = function(type,callback){
        console.info("app.view->list("+type+")");

        $api.get("view/"+type,[],function(res){
            console.info("app.view->list(): ");
            console.log(res);
            callback(res);

        })
    };

    self.check = function(type,type_id,callback){
        console.info("app.view->check("+type+","+type_id+")");

        $api.get("view/"+type+"/"+type_id,[],function(res){
            console.info("app.view->check(): ");
            console.log(res);
            if (res != "null"){

                callback(true);

            }else{
                callback(false);

            }
        })
    };

});;
var app = angular.module("vts", ['ui.router','app.data','textAngular','app.api','app.like','app.subscription','app.view']);

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




;
app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('login', { url: "/login", templateUrl: "app/components/login/loginView.html"})
        .state('reminder', { url: "/reminder", templateUrl: "app/components/login/reminderView.html"})
        .state('register', { url: "/register", templateUrl: "app/components/register/registerView.html"})
        .state('home', { url: "/", templateUrl: "app/components/home/homeView.html"})
        .state('dudas', { url: "/dudas/:doubt_id", templateUrl: "app/components/dudas/dudasView.html"})
        .state('avisos', { url: "/avisos", templateUrl: "app/components/avisos/avisosView.html"})
        .state('course', { url: "/course/:course_id/:tutorial_id", templateUrl: "app/components/course/courseView.html"})

        .state('welcome', { url: "/welcome", templateUrl: "app/components/account/welcomeView.html"})
        .state('search', { url: "/search", templateUrl: "app/components/search/searchView.html"})

        .state('suscripcion', { url: "/suscripcion", templateUrl: "app/components/suscripcion/suscripcionView.html"})
        .state('suscripcion.courses',       {url: '/courses',views: {'suscripcion': { templateUrl: 'app/components/suscripcion/suscripcionCoursesView.html'}}})
        .state('suscripcion.dudas',       {url: '/dudas',views: {'suscripcion': { templateUrl: 'app/components/suscripcion/suscripcionDudasView.html'}}})


        .state('account', { url: "/account", templateUrl: "app/components/account/accountView.html"})
        .state('account.info',       {url: '/info',views: {'account': { templateUrl: 'app/components/account/accountInfoView.html'}}})
        .state('account.email',       {url: '/email',views: {'account': { templateUrl: 'app/components/account/accountEmailView.html'}}})
        .state('account.pass',       {url: '/pass',views: {'account': { templateUrl: 'app/components/account/accountPassView.html'}}})
        .state('account.notifications',       {url: '/notifications',views: {'account': { templateUrl: 'app/components/account/accountNotificationsView.html'}}})
        .state('account.config',       {url: '/config',views: {'account': { templateUrl: 'app/components/account/accountConfigView.html'}}})

        .state('help', { url: "/help", templateUrl: "app/components/help/helpView.html" })
        .state('help.sobre',       {url: '/sobre',views: {'help': { templateUrl: 'app/components/help/aboutView.html'}}})
        .state('help.faq',          {url: '/faq',views: {'help': { templateUrl: 'app/components/help/faqView.html'}}})
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
app.controller("courseController", function($scope,$stateParams,$api,$sce,$subscription,$views){

    $scope.course_id = $stateParams.course_id;
    $scope.tutorial_id = $stateParams.tutorial_id;
    $scope.is_subscribed = false;

    $scope.video_url = "";

    $scope.course = [];
    $scope.modules = [];

    $scope.tutorial = {};


    $scope.getCourse = function(id, callback){
        console.log("courseController: getCourse()");


        $api.get("course/"+id+"/all",[], function(res){

            console.log("courseController->getCourse(): ");
            console.log(res.course.modules);

            $scope.course = res.course;
            $scope.modules =  $scope.course.modules;

            if (callback) { callback(true);}


        });

    };


    $scope.getTutorial = function(tutorial_id){
        console.info("courseController: getTutorial("+tutorial_id+")");

        $api.get("tutorial/id/"+tutorial_id,[],function(res){
            console.log("courseController->getTutorial(): ");

            $scope.tutorial = res;
            $scope.video_url = $sce.trustAsResourceUrl($scope.tutorial.video_url);
            console.log(res)
        });

    }


    $scope.subscribe = function(course_id){
        console.info("courseController: subscribe("+course_id+")");

        $subscription.add(3,course_id,function(res){
            console.info("courseController->subscribe(): ");
            console.log(res)
            $scope.is_subscribed = true;
        });
    };
    $scope.unsubscribe = function(course_id){
        console.info("courseController: unsubscribe("+course_id+")");

        $subscription.delete(3,course_id,function(res){
            console.info("courseController->unsubscribe(): ");
            console.log(res)
            $scope.is_subscribed = false;
        });
    };

    $scope.check_subscription = function(type_id){
        $subscription.check(3,type_id,function(res){
            $scope.is_subscribed = res;
        });
    }

    $scope.setView = function(type_id){
        $views.add(4,type_id,function(res){

        });
    }

    $scope.unsetView = function(type_id){
        $views.delete(4,type_id,function(res){

        });
    }


});;
app.controller("dudasController", function($scope,$api,$stateParams,$subscription,$like){

    angular.element(document).ready(function () {
        console.log('Code highlighting');
        prettyPrint();
    });

    $scope.doubt_id = $stateParams.doubt_id;
    $scope.auxDoubt = {};
    $scope.doubtsList = {};
    $scope.doubt = {};
    $scope.NewAnswer = {};
    $scope.answers = [];
    $scope.comment = {};
    $scope.is_subscribed = false;

    $scope.addDoubt = function(tutorial_id){
        console.log("dudasController: addDoubt(): ");
        console.log($scope.auxDoubt);
        console.log("tutorial: " + tutorial_id);

        var arr = [];
        arr["title"] = $scope.auxDoubt.title;
        arr["description"] = $scope.auxDoubt.description;
        arr["tutorial_id"] = tutorial_id;


        $api.post("doubt",arr,function(res){
            console.log("dudasController->addDoubt(): ");

            console.log(res);
        })
    };


    $scope.getDoubts = function(tutorial_id){
        console.log("dudasController: getDoubts("+tutorial_id+"): ");

        $api.get("doubt/tutorial/"+tutorial_id,[],function(res){
            console.log("dudasController->getDoubts(): ");

            console.log(res);
            $scope.doubtsList = res;
        })

    };
    $scope.getDoubt = function(doubt_id){
        console.log("dudasController: getDoubt("+doubt_id+"): ");

        $api.get("doubt/"+doubt_id,[],function(res){
            console.log("dudasController->getDoubts(): ");

            console.log(res);
            $scope.doubt = res;
        })

    };

    $scope.getAll = function(){
        console.log("dudasController: getAll(): ");

        $api.get("doubt/",[],function(res){
            console.log("dudasController->getAll(): ");

            console.log(res);
            $scope.doubtsList = res;
        })

    };



    $scope.addAnswer = function(doubt_id){
        console.log("dudasController: addAnswer(): ");

        var arr = [];

        arr["description"] = $scope.NewAnswer.description;
        arr["doubt_id"] = doubt_id;


        $api.post("doubt/answer",arr,function(res){
            console.log("dudasController->addAnswer(): ");

            console.log(res);
        })
    }


    $scope.getAnswers = function(doubt_id){
        console.info("dudasController: getAnswers("+doubt_id+"): ");

        $api.get("doubt/answer/"+doubt_id,[],function(res){
            console.info("dudasController->getAnswers(): ");

            console.log(res);
            $scope.answers = res;
        })

    };

    $scope.getComments = function(answer_id){
        console.info("dudasController: getComments("+answer_id+"): ");

        $api.get("comment/0/"+answer_id,[],function(res){
            console.info("dudasController->getAnswers(): ");

            console.log(res);
            return res;
        })

    };


    $scope.addComment = function(answer_id){
        console.info("dudasController: addComment("+answer_id+"): ");
        var arr = [];

        arr["description"] = $scope.comment.description;
        arr["type_id"] = answer_id;
        arr["type"] = 0;
        console.log(arr);

        $api.post("comment",arr,function(res){
            console.info("dudasController->addComment(): ");

            console.log(res);

        })

    };

    $scope.subscribe = function(doubt_id){
        console.info("dudasController: subscribe("+doubt_id+")");

        $subscription.add(0,doubt_id,function(res){
            console.info("dudasController->subscribe(): ");
            console.log(res);
            $scope.is_subscribed = true;

        });
    }


    $scope.unsubscribe = function(doubt_id){
        console.info("dudasController: unsubscribe("+doubt_id+")");

        $subscription.delete(0,course_id,function(res){
            console.info("dudasController->unsubscribe(): ");
            console.log(res);
            $scope.is_subscribed = false;
        });
    };

    $scope.check_subscription = function(type_id){
        $subscription.check(0,type_id,function(res){
            $scope.is_subscribed = res;
        });
    };


    $scope.answer_like = function(type_id){

        $like.add(1,type_id, function(res){
            console.info("dudasController->answer_like(): ");
            console.log(res);
        });
    };
    $scope.answer_unlike = function(type_id){

        $like.delete(1,type_id, function(res){
            console.info("dudasController->answer_unlike(): ");
            console.log(res);
        });
    };



});;
app.controller("helpController", function($scope,$data){
    $scope.data = "Dataaaaaaaaaaaa";




});;
app.controller("homeController", function($scope,$data,$api){

    $scope.tutorials = [];


    $scope.lastTutorials = function(){

        $api.get("tutorial/last",[],function(res){

            $scope.tutorials = res;
            console.log(res)
        });


    };



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
app.controller("suscripcionController", function($scope,$api,$subscription){

    $scope.items = [];

    $scope.subscriptions = function(type) {
        console.info("subscriptionController: subscriptions()")

        $subscription.list(type, function (res) {
            console.info("subscriptionController->subscriptions()")
            console.log(res);
            $scope.items = res;
        })
    }


    $scope.unsubscribe = function(type, type_id){
        console.info("subscriptionController: unsubscribe("+type+","+type_id+")");

        $subscription.delete(type,type_id, function(res){
            console.info("subscriptionController->unsubscribe()")
            console.log(res);
            $scope.subscriptions(type); // TODO eliminar manualmente del array
        });
    }



});;
app.directive("dudasCard", function(){

    return {
        restrict: 'E',
        scope: {
          doubt: '=info'
        },
        templateUrl: 'app/shared/dudas/dudas-card.html',
        controller: function($scope){
            //console.log($scope.section);


        }
    };

});;
app.directive("tutorialCard", function(){

    return {
        restrict: 'E',
        scope: {
          title: '=title'
        },
        templateUrl: 'app/shared/tutoriales/tutoriales-card.html',
        controller: function($scope){


        }
    };

});