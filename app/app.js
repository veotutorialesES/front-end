var app = angular.module("vts", ['ui.router','app.api','app.user','ngSanitize','app.data']);
app.run(function($rootScope,$window,$http,$api,$user,$state,$dataService) {



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
