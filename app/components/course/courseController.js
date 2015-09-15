app.controller("courseController", function($scope,$stateParams,$api,$sce){

    $scope.course_id = $stateParams.course_id;
    $scope.tutorial_id = $stateParams.tutorial_id;


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
        console.log("courseController: getTutorial()");

        $api.get("tutorial/id/"+tutorial_id,[],function(res){
            console.log("courseController->getTutorial(): ");

            $scope.tutorial = res;
            $scope.video_url = $sce.trustAsResourceUrl($scope.tutorial.video_url);
            console.log(res)
        });

    }


});