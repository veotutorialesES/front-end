app.controller("courseController", function($scope,$stateParams,$api,$sce){

    $scope.course_id = $stateParams.course_id;
    $scope.tutorial_id = $stateParams.tutorial_id;
    $scope.is_subscribed = false;

    $scope.video_url = "";

    $scope.course = [];
    $scope.modules = [];
    $scope.tutorial = {};


    $scope.getCourse = function(id, callback){
        console.log("courseController: getCourse()");


        $api.get("course/"+id,[], function(res){


            $scope.course = res.data;
            $scope.modules =   res.data.modules;

            if (callback) { callback(true);}


        });

    };

    $scope.getModuleTutorials = function(module_id,callback){
        console.info("courseController: getTutorial("+tutorial_id+")");

        $api.get("module/"+module_id,[],function(res){
            console.log("courseController->getTutorial(): ");

            callback(res.data);
        });

    };

    $scope.getTutorial = function(tutorial_id){
        console.info("courseController: getTutorial("+tutorial_id+")");

        $api.get("tutorial/"+tutorial_id,[],function(res){
            console.log("courseController->getTutorial(): ");

            $scope.tutorial = res.data;
            $scope.video_url = $sce.trustAsResourceUrl($scope.tutorial.video_url);
            console.log(res)
        });

    };


});