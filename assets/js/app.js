var app = angular.module("vts", ['ui.router','ngSanitize']);
app.run(function($rootScope,$window,$http,$api,$user,$state,$dataService,$course) {


    var c = $course.find(1);
    console.warn(c);
    var m = c.modules();
    console.warn(m);
    var c2 = $course.find(m[0].course_id);



    $rootScope.pageLoaded = false;
    $rootScope.user = new $user.user();

    // temporal
    $rootScope.user.refresh_token();



    $rootScope.imageAsset = function(size,asset){
        var url = "http://localhost:8000/";
        return url + "img/media/" + size + "/" + asset;
    };





    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        console.log(toState.name);

        animateProgress(0,80);

     //   alert("STATE CHANGE to: " + toState.name);

        if (toState.name == "course"){
            if ($dataService.source.search("C"+toParams.course_id) == null) {
                $dataService.source.add("course", "course/" + toParams.course_id, "C" + toParams.course_id, {});
            }
        }
        if (toState.name == "tutorial"){
            if ($dataService.source.search("T"+toParams.tutorial_id) == null) {
                $dataService.source.add("tutorial", "tutorial/" + toParams.tutorial_id, "T" +toParams.tutorial_id, {});
            }
        }
        if (toState.name == "dudas"){
           // alert("TENEMOS DUDA" + toParams.doubt_id);
            if ($dataService.source.search("D"+toParams.doubt_id) == null) {
               // alert("AÑADIDA DUDA AL SOurCE");
                $dataService.source.add("dudas", "doubt/" + toParams.doubt_id, "D" +toParams.doubt_id, {});
            }
        }
        if (!$dataService.IsSectionDownloaded(toState.name)) {
           // alert(toState.name);

            console.log($dataService.source.lista);

            event.preventDefault();
           // alert("No descargadooo");

            $dataService.SectionDownload(toState.name, function () {
               // alert("dESCARGADOOO!!");
                $state.go(toState.name, toParams);
            });
        }else{
            animateProgress(80,100);
        }

    })


});




app.controller("headerController",function($rootScope,$scope,$window,$state,$api){

    $scope.notifications = [];



    $scope.search = function(q){
        console.log(q);
        $state.go('search',{type:'all',q:q,page:0});
    };

    $scope.logout = function(){
        $rootScope.user.clear();
    };

    $scope.getNotifications = function(){

        $api.get("notifications",[], function(res){
            $scope.notifications = res.data;
        });
    }

});
;
app.service("$answer", function($api){
   // var self = this;


    this.module = {

        title: null,
        module_id: null,

        init: function(){

        },
        setTitle: function(){
            // validar titulo
        },
        save: function(){
            if (this.module_id != null){
                // update
            }else{
                // insert
            }
        },
        delete: function(){

        }



    };


    this.find = function(id){


        return {
            tutorials: function(){

            }
        }
    };


    this.index = function(id){

        var arr = [];
        arr[0] = {
            module_id: 99,
            course_id: id,
            tutorials: function(){
               // return  $course.find(1)
            }
        };

        return arr;

    };






});;
app.service("$comment", function($api){
   // var self = this;


    this.module = {

        title: null,
        module_id: null,

        init: function(){

        },
        setTitle: function(){
            // validar titulo
        },
        save: function(){
            if (this.module_id != null){
                // update
            }else{
                // insert
            }
        },
        delete: function(){

        }



    };


    this.find = function(id){


        return {
            tutorials: function(){

            }
        }
    };


    this.index = function(id){

        var arr = [];
        arr[0] = {
            module_id: 99,
            course_id: id,
            tutorials: function(){
               // return  $course.find(1)
            }
        };

        return arr;

    };






});;
app.service("$course", function($api,$rootScope,$http,$window,$module){
   // var self = this;


    this.find = function(id){


        return {
            modules: function(){
                return $module.index(3);
            }
        }
    };






    this.course = {
        modules: [],
        find: function(id){

        }

    }

    // course.find(ID)




});;
app.service("$doubt", function($api){
   // var self = this;


    this.module = {

        title: null,
        module_id: null,

        init: function(){

        },
        setTitle: function(){
            // validar titulo
        },
        save: function(){
            if (this.module_id != null){
                // update
            }else{
                // insert
            }
        },
        delete: function(){

        }



    };


    this.find = function(id){


        return {
            tutorials: function(){

            }
        }
    };


    this.index = function(id){

        var arr = [];
        arr[0] = {
            module_id: 99,
            course_id: id,
            tutorials: function(){
               // return  $course.find(1)
            }
        };

        return arr;

    };






});;
app.service("$like", function($api){
   // var self = this;


    this.module = {

        title: null,
        module_id: null,

        init: function(){

        },
        setTitle: function(){
            // validar titulo
        },
        save: function(){
            if (this.module_id != null){
                // update
            }else{
                // insert
            }
        },
        delete: function(){

        }



    };


    this.find = function(id){


        return {
            tutorials: function(){

            }
        }
    };


    this.index = function(id){

        var arr = [];
        arr[0] = {
            module_id: 99,
            course_id: id,
            tutorials: function(){
               // return  $course.find(1)
            }
        };

        return arr;

    };






});;
app.service("$module", function($api,$tutorial){
   // var self = this;


    this.module = {

        title: null,
        module_id: null,

        init: function(){

        },
        setTitle: function(){
            // validar titulo
        },
        save: function(){
            if (this.module_id != null){
                // update
            }else{
                // insert
            }
        },
        delete: function(){

        }



    };


    this.find = function(id){


        return {
            tutorials: function(){

            }
        }
    };


    this.index = function(id){

        var arr = [];
        arr[0] = {
            module_id: 99,
            course_id: id,
            tutorials: function(){
               // return  $course.find(1)
            }
        };

        return arr;

    };






});;
app.service("$notification", function($api){
   // var self = this;


    this.module = {

        title: null,
        module_id: null,

        init: function(){

        },
        setTitle: function(){
            // validar titulo
        },
        save: function(){
            if (this.module_id != null){
                // update
            }else{
                // insert
            }
        },
        delete: function(){

        }



    };


    this.find = function(id){


        return {
            tutorials: function(){

            }
        }
    };


    this.index = function(id){

        var arr = [];
        arr[0] = {
            module_id: 99,
            course_id: id,
            tutorials: function(){
               // return  $course.find(1)
            }
        };

        return arr;

    };






});;
app.service("$subscription", function($api){
   // var self = this;


    this.module = {

        title: null,
        module_id: null,

        init: function(){

        },
        setTitle: function(){
            // validar titulo
        },
        save: function(){
            if (this.module_id != null){
                // update
            }else{
                // insert
            }
        },
        delete: function(){

        }



    };


    this.find = function(id){


        return {
            tutorials: function(){

            }
        }
    };


    this.index = function(id){

        var arr = [];
        arr[0] = {
            module_id: 99,
            course_id: id,
            tutorials: function(){
               // return  $course.find(1)
            }
        };

        return arr;

    };






});;
app.service("$tutorial", function($api){
   // var self = this;


    this.module = {

        title: null,
        module_id: null,

        init: function(){

        },
        setTitle: function(){
            // validar titulo
        },
        save: function(){
            if (this.module_id != null){
                // update
            }else{
                // insert
            }
        },
        delete: function(){

        }



    };


    this.find = function(id){


        return {
            tutorials: function(){

            }
        }
    };


    this.index = function(id){

        var arr = [];
        arr[0] = {
            module_id: 99,
            course_id: id,
            tutorials: function(){
               // return  $course.find(1)
            }
        };

        return arr;

    };






});;
app.service("$api", function($http,$rootScope){
    var self = this;
    var host = "localhost:8000";
    // host = "api.veotutoriales.es";

    self.app_id = "123456";

    self.base_url = "http://"+host+"/api/v1/";

    self.get = function(route, params, callback){ self.http("GET", route, params, callback); };
    self.post = function(route, params, callback){ self.http("POST", route, params, callback); };
    self.put = function(route, params, callback){ self.http("PUT", route, params, callback); };
    self.delete = function(route, params, callback){ self.http("DELETE", route, params, callback); };

    self.http = function(type, route, params, callback){

        var postData = "";
        for (var k in params){
            postData += "&"+k+"="+params[k];
        }

        // check if token need refresh
        /**
         *  Primero con este metodo comprobamos que el token es valido, sino intentamos renovarlo
         */
        var token = $rootScope.user.token ? $rootScope.user.token.token : null;

        $rootScope.user.refresh_token(function(res){

            $http({
                method: type,
                url: self.base_url+route,
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'app_id': self.app_id,
                    'authorization': "Bearer "+token
                },
                data:postData
            }).success(function (res) {
                console.log("(success) HTTP: ApiService->"+type+"("+params+"): "+self.base_url+route+ postData);
                console.log(res);

                callback(res);


            }).error(function(data){
                console.log("(error) HTTP: ApiService->"+type+"("+params+"): "+self.base_url+route+ postData);
                console.log(data);

                callback(data);

            });

        });

    }







    self.file = function(route, file, callback){
                $http.post(self.base_url+route, file, {
                        withCredentials: true,
                       headers: {'Content-Type': undefined },
                   transformRequest: angular.identity
               }).success(function (res) {
                   console.log("ApiService->file(): ");
                  console.log(res);
                      callback(res);
                }).error(function(data){console.error("ApiService->file(): ");
                   callback(data);

                });

            };

});;
app.service("$dataService", function($api,$rootScope,$http,$window){
    var self = this;

    self.source = {
        lista: [],
        add: function(section,route,id, params){
            var obj = {
                id: id,
                section: section,
                route: route,
                params: params,
                response: null,
                calls: 0,
                last_call: 0
            };
           // this.list.add(obj);
            this.lista[this.lista.length] = obj;
        },
        search: function(id){
            for (var i = 0; i < this.lista.length;i++){
                if (this.lista[i].id == id){
                    return this.lista[i];
                }
            }

            return null;
        },
        searchBySection: function(section){
            var arr = [];
            for (var i = 0; i < this.lista.length;i++){
                if (this.lista[i].section == section){
                    arr[arr.length] = i; //this.lista[i];
                }
            }

            return arr;
        },
        sync: function(){
            // recuperar toda la información disponible de la base de datos local
        }

    };

    // TODO deja de funcionar si metes mal algun parametro

    // home
    self.source.add("home","calendar","0001",{start:"2015-11-02",days:7});


    // course
   //self.source.add("course","course/21","0002",{type:3});



    self.SourceDownload = function(index, callback){
        var obj = self.source.lista[index];
        var arr = [];

        for (var k in obj.params){
           // alert("Key is " + k + ", value is" + obj.params[k]);
            arr[k] = obj.params[k];
        }


        console.log(arr);
        $api.get(obj.route,arr,function(res) {
            self.source.lista[index].response = res;
            self.source.lista[index].calls++;
            console.log("RESPUESTA");
            console.log(res);
            callback(true);

        });
    };



    self.SectionDownload = function(section, callback){

        var sources = self.source.searchBySection(section);
        var count = sources.length;
        for (var i = 0; i < sources.length; i++){
            self.SourceDownload(sources[i],function(){
                count--;
                if (count == 0){
                    //alert("TODO DESCARGADO");
                    callback(true);
                }
            })
        }


    }


    self.IsSectionDownloaded = function(section){
        var sources = self.source.searchBySection(section);
        var count = sources.length;

        for (var i = 0; i < sources.length; i++){
            if (self.source.lista[sources[i]].calls < 1 ){
                return false;
            }
        }
        return true;
    }

    // HOME


    // SEARCH


    // MEDIA


});;
app.service("$user", function($api,$window,$http){


    this.user = function() {

        var obj = $window.localStorage.user ? JSON.parse($window.localStorage.user) : null;

        var name1 = $window.localStorage.user ? obj.name : null;
        var email1 = $window.localStorage.user ?obj.email : null;
        var token1 = $window.localStorage.user ?obj.token : null;
        var user_id1 = $window.localStorage.user ? obj.user_id : null;


        return {
            user_id: user_id1,
            name:name1,
            email: email1,
            token: token1,
            is_user: function(){
                // TODo mejor forma
              return (this.user_id > 0)
            },
            is_admin: function(){
              return false;
            },
            is_premium: function(){
                return false;
            },
            login: function(email, pass, callback){
                // http connection

                var params = [];
                params["email"] = email;
                params["password"] = pass;

                var self = this;
                $api.post("auth/login",params,function(res){
                    console.log("Login response: ");
                    console.log(res);

                    self.name = res.name;
                    self.user_id = res.user_id;
                    self.email = res.email;
                    self.token = res.token;
                    self.params = [];

                    callback(res.name != null)

                })
            },
            cache: function(){
                $window.localStorage.setItem("user",JSON.stringify(this));
            },
            clear: function(){
                this.name = null;
                this.user_id = null;
                this.email = null;
                this.token = null;
                $window.localStorage.removeItem("user");
            },
            token_expiration: function(){
                // var now = Math.floor(Date.now() / 1000);
                // TODO: Devuelve el tiempo que falta para que expire el token en segundos

                return 500;
            },
            refresh_token: function(callback){

                var self = this;

                if (this.token_expiration() < 300){
                    if(callback) callback();
                    return false;
                }


                if (!this.is_user()){
                    if(callback) callback();
                    return false;
                }



                var postData = "&refresh_token=" + self.token.refresh_token;
                $http({
                    method: "POST",
                    url: $api.base_url+"auth/refresh_token",
                    headers: {
                        'Content-Type' : 'application/x-www-form-urlencoded',
                        'app_id': $api.app_id,
                        'authorization': "Bearer "+ self.token.token
                    },
                    data:postData
                }).success(function (res) {
                    console.warn(res);

                    callback(res);


                }).error(function(res){
                    console.warn(res);

                    callback(res);

                });


            }
        }
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
app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    //

    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        //.state('login', { url: "/login", templateUrl: "app/components/login/loginView.html"})
        .state('reminder', { url: "/reminder", templateUrl: "app/components/login/reminderView.html"})
        .state('register', { url: "/register", templateUrl: "app/components/register/registerView.html"})
        .state('home', { url: "/", templateUrl: "app/components/home/homeView.html"})
        .state('profile', { url: "/profile", templateUrl: "app/components/profile/profileView.html"})
        .state('calendar', { url: "/calendar", templateUrl: "app/components/calendar/calendarView.html"})
        .state('dudas', { url: "/dudas/:doubt_id", templateUrl: "app/components/dudas/dudasView.html"})
        .state('avisos', { url: "/avisos", templateUrl: "app/components/avisos/avisosView.html"})
        .state('course', { url: "/media/:course_id", templateUrl: "app/components/course/courseFileView.html"})
        .state('tutorial', { url: "/media/:course_id/:tutorial_id", templateUrl: "app/components/course/courseView.html"})


        .state('activation', { url: "/activation", templateUrl: "app/components/login/activationView.html"})
        .state('activate', { url: "/activation/:email/:token", templateUrl: "app/components/login/activationView.html"})


        .state('search', { url: "/search/:type/:q/:page", templateUrl: "app/components/search/searchView.html"})


        .state('account', { url: "/account", templateUrl: "app/components/account/accountView.html"})
        .state('account.info',       {url: '/info',views: {'account': { templateUrl: 'app/components/account/accountInfoView.html'}}})
        .state('account.email',       {url: '/email',views: {'account': { templateUrl: 'app/components/account/accountEmailView.html'}}})
        .state('account.pass',       {url: '/pass',views: {'account': { templateUrl: 'app/components/account/accountPassView.html'}}})
        .state('account.notifications',       {url: '/notifications',views: {'account': { templateUrl: 'app/components/account/accountNotificationsView.html'}}})
        .state('account.config',       {url: '/config',views: {'account': { templateUrl: 'app/components/account/accountConfigView.html'}}})
        .state('account.subDudas',       {url: '/SDoubts',views: {'account': { templateUrl: 'app/components/account/accountSuscriptionDudasView.html'}}})
        .state('account.subCourses',       {url: '/SCourses',views: {'account': { templateUrl: 'app/components/account/accountSuscriptionCoursesView.html'}}})

        .state('help', { url: "/help", templateUrl: "app/components/help/helpView.html" })
        .state('help.sobre',       {url: '/sobre',views: {'help': { templateUrl: 'app/components/help/aboutView.html'}}})
        .state('help.faq',          {url: '/faq',views: {'help': { templateUrl: 'app/components/help/faqView.html'}}})
        .state('help.tos',       {url: '/tos',views: {'help': { templateUrl: 'app/components/help/tosView.html'}}})
        .state('help.cookies',       {url: '/cookies',views: {'help': { templateUrl: 'app/components/help/cookiesView.html'}}})
        .state('help.contact',       {url: '/contact',views: {'help': { templateUrl: 'app/components/help/contactView.html'}}})


   // $locationProvider.html5Mode(true);
});;
app.controller("commentController", function($scope,$api,$stateParams){



    $scope.add = function(type,type_id, comment){
        console.info("commentController: addComment(): ");
        var arr = [];

        arr["description"] = comment;
        arr["type_id"] = type_id;
        arr["type"] = type;
        console.log(arr);

        $api.post("comment",arr,function(res){
            console.info("commentController->addComment(): ");
            console.log(res);

        })

    };



});;
app.controller("likeController", function($scope,$api,$state){


    $scope.is_subscribed = false;

    $scope.add = function(type, type_id, value  ){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        arr["value"] = value;
        $api.post("like",arr,function(res){


        })
    };

/*
    $scope.amount = function(type, type_id){

        $api.get(type + "/" + type_id + "/likes",[], function(res){
            return res.data.value;
        });
    }
*/
    $scope.delete = function(type, type_id){

        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;

        $api.delete("like",arr,function(res){


        })
    };

    $scope.list = function(type){
        var arr = [];
        arr["type"] = type;
        $api.get("like",arr,function(res){


        })
    };


    $scope.check = function(type,type_id){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        $api.get("like/me",arr,function(res){

            $scope.is_subscribed = res.status;

        })
    };

});;
app.controller("subscriptionController", function($scope,$api,$state){


    $scope.courseSubscriptions = [];

    $scope.add = function(type, type_id){
        $scope.is_subscribed = true;
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        $api.post("subscription/",arr,function(res){

            if (res.status){
                $scope.is_subscribed = true;

            }

        })
    };

    $scope.delete = function(type, type_id){
        $scope.is_subscribed = false;

        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;

        $api.delete("subscription/delete",arr,function(res){
            if (res.status){
                $scope.is_subscribed = false;

            }

        })
    };

    $scope.list = function(type){
        var arr = [];
        arr["type"] = type;
        $api.get("subscription",arr,function(res){
            console.info("Subscripciones");
            console.info(res);
            $scope.courseSubscriptions = res.data;

        })
    };


    $scope.check = function(type,type_id){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        $api.get("subscription/me",arr,function(res){

            $scope.is_subscribed = res.status;

        })
    };

});;
app.controller("viewController", function($scope,$api,$state){


    $scope.is_subscribed = false;

    $scope.add = function(type, type_id){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        $api.post("view",arr,function(res){


        })
    };

    $scope.delete = function(type, type_id){

        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;

        $api.delete("view",arr,function(res){


        })
    };

    $scope.list = function(type){
        var arr = [];
        arr["type"] = type;
        $api.get("view",arr,function(res){


        })
    };


    $scope.check = function(type,type_id){
        var arr = [];
        arr["type"] = type;
        arr["type_id"] = type_id;
        $api.get("view/me",arr,function(res){

            $scope.is_subscribed = res.status;

        })
    };

});;
app.controller("avisosController", function($scope){




});;
app.controller("accountController", function($scope,$api,$state,$rootScope){




 
    $scope.updateName = function(name,pass){

        var arr = [];
        arr["name"] = name;
        arr["pass"] = pass;

        $api.put("user/me",arr,function(res){

        });
    };

    $scope.updateEmail = function(email,pass){

        var arr = [];
        arr["email"] = email;
        arr["pass"] = pass;

        $api.put("user/me",arr,function(res){

        });
    };

    $scope.updatePassword = function(old_pass,new_pass,new_pass2){

        if (new_pass != new_pass2){
            alert("Pass no coinciden");
            return null;
        }

        var arr = [];
        arr["new_pass"] = new_pass;
        arr["pass"] = old_pass;

        $api.put("user/me",arr,function(res){

        });
    }
    $scope.destroy = function(pass){

        var arr = [];
        arr["pass"] = pass;

        $api.delete("user/me",arr,function(res){
            $rootScope.loged = false;
            // TODO comprobar que se ha eliminado antes
            $state.go("home");

        });
    }


    $scope.updateNotifications = function(){

        var arr = [];

        arr["notifications"] = true;
        arr["boletin"] = $rootScope.user.notifications.config.boletin;
        arr["stack"] = $rootScope.user.notifications.config.stack;
        console.info(arr);
        $api.put("user/me",arr,function(res){

        });
    }

});;
app.controller("calendarController", function($scope,$api,$state,$rootScope,$dataService){







});;
app.controller("courseController", function($scope,$stateParams,$api,$sce,$dataService){

    $scope.course_id = $stateParams.course_id;
    $scope.tutorial_id = $stateParams.tutorial_id;
    $scope.is_subscribed = false;

    $scope.video_url = "";

    $scope.course = [];
    $scope.modules = [];
    $scope.tutorial = {};


    function processCode(string){

        string = string.replace("[code]","<pre>");
        string = string.replace("[/code]","</pre>");

        return string;
    }

    $scope.getCourse = function(id, callback){
        console.log('courseController: getCourse()');


        //$api.get('course/'+id,[], function(res){
            var response = $dataService.source.search("C"+id);
            var res = response.response;
        console.log("C"+id);
            console.log(res);
            $scope.course = res.data;
            $scope.course.description = processCode($scope.course.description);
            $scope.modules =   res.data.modules;
            console.log('Code highlighting');

            setTimeout(function(){
                $('pre').each(function(i, block) {hljs.highlightBlock(block);});

            },1000);

            if (callback) { callback(true);}


       // });

    };
/*
    $scope.getModuleTutorials = function(module_id,callback){
        console.info("courseController: getTutorial("+tutorial_id+")");

        $api.get("module/"+module_id,[],function(res){
            console.log("courseController->getTutorial(): ");

            callback(res.data);
        });

    };
*/
    $scope.getTutorial = function(tutorial_id){
        console.info("courseController: getTutorial("+tutorial_id+")");

       // $api.get("tutorial/"+tutorial_id,[],function(res){
            console.log("courseController->getTutorial(): ");

            var response = $dataService.source.search("T"+tutorial_id);
            var res = response.response;
            console.info(res);
            $scope.tutorial = res.data;
            $scope.video_url = $sce.trustAsResourceUrl($scope.tutorial.video_url);

            //console.log(res)
        //});

    };





});;
app.controller("dudasController", function($scope,$api,$stateParams,$dataService){

    angular.element(document).ready(function () {
        console.log('Code highlighting');
        prettyPrint();
    });


    tinymce.init({
        selector: "textarea",
        plugins: [
            "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
            "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
            "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"
        ],

        toolbar1: "bold italic underline strikethrough | alignleft aligncenter | formatselect | bullist numlist | outdent indent | link unlink | hr",
        menubar: false,
        statusbar: false,
        toolbar_items_size: 'small'
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
       // arr["description"] = $scope.auxDoubt.description;
        arr["description"] =tinyMCE.activeEditor.getContent({format : 'raw'});
        arr["tutorial_id"] = tutorial_id;


        $api.post("doubt",arr,function(res){
            console.log("dudasController->addDoubt(): ");

            console.log(res);
        })
    };


    $scope.getDoubts = function(tutorial_id){
        console.log("dudasController: getDoubts("+tutorial_id+"): ");
        var arr = [];
        arr["tutorial_id"] = tutorial_id;
        $api.get("doubt/",arr,function(res){
            $scope.doubtsList = res.data;
        })

    };
    $scope.getDoubt = function(doubt_id){
        console.log("dudasController: getDoubt("+doubt_id+"): ");

       // $api.get("doubt/"+doubt_id,[],function(res){

            var response = $dataService.source.search("D"+doubt_id);
            var res = response.response;

            $scope.doubt = res.data;
       // })

    };

    $scope.getAll = function(){
        console.log("dudasController: getAll(): ");

        $api.get("doubt/",[],function(res){
            console.log("dudasController->getAll(): ");

            console.log(res);
            $scope.doubtsList = res.data;
        })

    };

    $scope.amount = function(type, type_id, index){


        $api.get(type + "/" + type_id + "/likes",[], function(res){

            $scope.answers[index].amount = res.data.value;
            $scope.answers[index].quantity = 3;

        });
    };


    $scope.addAnswer = function(doubt_id){
        console.log("dudasController: addAnswer(): ");

        var arr = [];

        arr["description"] =tinyMCE.activeEditor.getContent({format : 'raw'});
        arr["doubt_id"] = doubt_id;


        $api.post("answer",arr,function(res){
            console.log("dudasController->addAnswer(): ");

            console.log(res);
        })
    }


    $scope.getAnswers = function(doubt_id){
        console.info("dudasController: getAnswers("+doubt_id+"): ");

        $api.get("answer/"+doubt_id,[],function(res){
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
        arr["type"] = 1;
        console.log(arr);

        $api.post("comment",arr,function(res){
            console.info("dudasController->addComment(): ");

            console.log(res);

        })

    };


    $scope.toogleCommentResponse = function(index){
        console.info("toogleCommentResponse()");

        for (var i = 0; i < $scope.answers.length; i++){
            $scope.answers[i].showResponse = false;
        }

        $scope.answers[index].showResponse = true;


    };

    /*
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
*/


});;
app.controller("helpController", function($scope){




});;
app.controller("homeController", function($scope,$api,$state,$rootScope,$dataService){

    $scope.tutorials = [];
    $scope.calendar = [];

    $rootScope.loading = true;
    $rootScope.loadingArr = [];
    $scope.addLoading = function(data){

        $rootScope.loadingArr.push(data);

        if ($scope.loadingArr.length == 2){
            $rootScope.loading = false;
        }


    };

    $scope.getDate = function(){
        var inicio = new Date();
        var d = inicio.getDate() < 10 ? "0" + inicio.getDate() : inicio.getDate();
        var m = (inicio.getMonth() + 1) < 10 ? "0" + (inicio.getMonth() + 1) : (inicio.getMonth() + 1);
        var t = inicio.getFullYear() + "-" + m + "-" + d;
        return t;
    };


    $scope.lastTutorials = function(){

        $api.get("tutorial/",[],function(res){
            $scope.tutorials = res;
            console.log(res)
            $scope.addLoading({
                title: "Tutorials",
                status: "true"
            });
        });

    };


    function calendarTutorials(tutorials, day){
       // console.info("calendarTutorials");
        var arr = [];
        for (var i = 0; i < tutorials.length; i++){
            if (tutorials[i].public_date == day){
                arr.push(tutorials[i]);
            }
        }

        return arr;

    }

    $scope.getCalendar = function(start, dias){
        console.info("homeController: getCalendar("+start+","+dias+")");
        $scope.calendar = [];
        var arr = [];
      //  arr["start"] = start;
      //  arr["days"] = dias;
        var tmp = [];

        //$api.get("calendar",arr,function(res){

        var res = $dataService.source.search("0001")
        console.error(res);
            progress.width("100%");
            var dat = start.substring(5,7) + "/" + start.substring(8,10) + "/" + start.substring(0,4);
            var inicio=new Date(dat); // obtener full


            for (var i = 0; i < dias; i++){


                var d = inicio.getDate() < 10 ? "0" + inicio.getDate() : inicio.getDate();
                var m = (inicio.getMonth() + 1) < 10 ? "0" + (inicio.getMonth() + 1) : (inicio.getMonth() + 1);
                var t = inicio.getFullYear() + "-" + m + "-" + d;
                var tutos = calendarTutorials(res.response.tutorials,t);


                var len = tutos.length > 0 ? 3 : 1;

                var dayNameObj = dayName(i, inicio);


                if (dayNameObj.weekday != 0) {
                    tmp.push({
                        day: dayNameObj,
                        tutorials: tutos,
                        len: len
                    });
                }

                inicio.setDate(inicio.getDate()+1);


            }

            $scope.calendar = tmp;
            $scope.addLoading({
                title: "calendar",
                status: "true"
            });
      //  });



    };


    function dayName(i,date){
        /*
        if (i == 0){
            return "HOY";
        }
        if (i == 1){
            return "MAÑANA";
        }
        */
        var weekday = new Array(7);
        weekday[0]=  "SAB/DOM";
        weekday[1] = "LUNES";
        weekday[2] = "MARTES";
        weekday[3] = "MIERCOLES";
        weekday[4] = "JUEVES";
        weekday[5] = "VIERNES";
        weekday[6] = "SAB/DOM";


        var month = new Array(12);

        month[0] = "ENE";
        month[1] = "FEB";
        month[2] = "MAR";
        month[3] = "ABR";
        month[4] = "MAY";
        month[5] = "JUN";
        month[6] = "JUL";
        month[7] = "AGO";
        month[8] = "SEP";
        month[9] = "OCT";
        month[10] = "NOV";
        month[11] = "DIC";

        var d = new Date();



        return {
            name: weekday[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()],
            weekday: date.getDay(),
            day: date.getDate(),
            today:(date.getDate() == d.getDate())
        }






    }







});;
app.controller("loginController", function($scope,$api,$state,$rootScope,$window,$stateParams){
    $('#myModal').modal('hide');

    $scope.wrong = false;


    $scope.send = function(email,pass) {
        $scope.wrong = false;

        var arr = [];
        arr["email"] = email;
        arr["password"] = pass;

        $rootScope.user.login(email,pass,function(status){
            console.warn(status);
            if (!status){
                $scope.wrong = true;
            }else{
                $rootScope.user.cache();
            }
            console.log($rootScope.user);

        });

    };




    $scope.activateEmail = function(){
        var arr = [];

        if (!$stateParams.token && !$stateParams.email){
            return null;
        }

        arr["activate_token"] = $stateParams.token;
        arr["email"] = $stateParams.email;
        $api.post("user/activate",arr,function(res){


           // $state.go("home");

            // TODO show a success message
        });
    };


    $scope.recoverToken = false;

    $scope.getRecoverToken = function(obj){

        var arr = [];
        arr["email"] = obj.email;

        $api.post("recover",arr,function(res){
            if (res.status){
                $scope.recoverToken = true;

            }
        })
    };

    $scope.recover = function(obj){
        var arr = [];
        arr["email"] = obj.email;
        arr["recover_token"] = obj.token;
        arr["pass"] = obj.pass;

        if (obj.pass != obj.pass2){
            alert("Pass no coinciden");
            return null; // TODO show error
        }

        $api.post("user/recover",arr,function(res){

        })
    };

});;
app.controller("profileController", function($scope,$api,$state,$rootScope,$dataService){







});;
app.controller("registerController", function($scope,$api,$state){

    $scope.user = {};
    $scope.wrong = false;
    $scope.msg = [];
    $scope.send = function(check) {
        $scope.wrong = false;
        $scope.msg = [];

        // TODO validate first

        if (!check){
            $scope.wrong = true;
           // return false;
        }


        var arr = [];
        arr["name"] = $scope.user.name;
        arr["pass"] = $scope.user.pass;
        arr["email"] = $scope.user.email;

        $api.post("user",arr,function(res){

            console.info("registerController->send():");
            console.log(res);
            if (!res.status){
                $scope.wrong = true;
                for (var key in res) {
                    var obj = res[key];

                    $scope.msg.push(replace(obj.toString()));
                }


            }else{
                $state.go("activation");
            }

        });

    }



    function replace(str){
        str.replace("[","");
        str.replace("]","");
        str.replace('"',"");
        return str;
    }
});;
app.controller("searchController", function($scope,$stateParams,$state,$api){

    $scope.type = $stateParams.type;
    $scope.q = $stateParams.q;
    $scope.filters = [];
    $scope.result = {};
    $scope.size = 10;
    $scope.from = 0;
    $scope.currentPage = $stateParams.page;
    $scope.pages = [];


    $scope.filter = function(type, page){

        $state.go('search',{type:type,page:page});

    };

    $scope.setFilter = function(){
        // TODO implement this
    };

    $scope.setFilters = function(){
        var arr = [];
        switch ($scope.type){
            case 'all':

                break;
            case 'cursos':
                arr.push({title:'tutoriales',selected:0});
                break;
            case 'tutoriales':
                arr.push({title:'Dudas',selected:0});
                arr.push({title:'Duracion',selected:0});

                break;
            case 'dudas':

                break;
        }

        $scope.filters = arr;
    };
    $scope.setFilters();


    $scope.search = function(){

        $scope.currentPage = $stateParams.page;

        var arr = [];
        arr['q'] = $scope.q;
        arr['type'] = $scope.type;
        arr['from'] = $scope.currentPage * $scope.size;
        arr['size'] = $scope.size;



        console.info(location.href);

        //TODO implement this
        $api.get("search",arr,function(res){
            $scope.result = res.data;

            var total = res.data.hits.total;
            var p = Math.ceil(total / $scope.size);
            var pages = [];
            for (var i = 0; i < p; i++){
                pages.push({
                    num: i
                })
            }
            $scope.pages = pages;



        });
    }


    $scope.getUrl = function(element){


        console.info(element);
            var url = "";
        if (element._type == "courses"){
            url = $state.href("course",{course_id:element._id});
        }

        if (element._type == "tutorials"){
            url = $state.href("tutorial",{course_id:element._source.course_id,tutorial_id:element._id});
        }


        return url;

        //$state.go(where + "/" + id);

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