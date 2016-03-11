app.controller("courseController", function($scope,$stateParams,$course,$module,$tutorial){


    $scope.course_id = $stateParams.course_id;
    $scope.course = {};
    $scope.modules = {};


    $scope.getCourse = function(id){
        console.log('courseController: getCourse()');
        $course.find(id, function(res){
            $scope.course = res;
        });

    };

    $scope.getModules = function(id){
        console.log('courseController: getModules()');
        $module.index(id, function(res){

            $scope.modules = res;


        });

    };

    $scope.getTutorials = function(id, callback){
        $scope.modules.tutorials = $tutorial.index(id,function(r){
            console.log(r);
            callback(r)
        })
    };


    $scope.getCourse($stateParams.course_id);
    $scope.getModules($stateParams.course_id);



});