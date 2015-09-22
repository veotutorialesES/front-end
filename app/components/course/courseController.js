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


});