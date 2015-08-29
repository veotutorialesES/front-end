app.controller("courseController", function($scope,$stateParams,$api){

    $scope.course_id = $stateParams.id;
    $scope.course = [];
    $scope.modules = [];

    $scope.getCourse = function(id, callback){
        console.log("courseController: getModules()");


        $api.get("course/"+id+"/all",[], function(res){

            console.log("courseController->getModules(): ");
            console.log(res.course.modules);

            $scope.course = res.course;
            $scope.modules =  $scope.course.modules;

            /*
            $scope.modules = [];
            for (var key in res.course.modules) {
                    var obj = res.course.modules[key];
                $scope.modules.push(obj);


            }
             */



            if (callback) { callback(true);}


        });

    };

});