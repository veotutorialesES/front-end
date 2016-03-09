app.controller("courseController", function($scope,$stateParams,$course){

    $scope.course_id = $stateParams.course_id;
    $scope.course = {};


    $scope.getCourse = function(id, callback){
        console.log('courseController: getCourse()');


        $course.find(id, function(res){
            $scope.course = res;
            callback(true);
        });

    };




    $scope.getCourse($stateParams.course_id);



});