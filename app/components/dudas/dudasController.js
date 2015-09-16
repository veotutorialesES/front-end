app.controller("dudasController", function($scope,$api,$stateParams){

    angular.element(document).ready(function () {
        console.log('Code highlighting');
        prettyPrint();
    });

    $scope.doubt_id = $stateParams.doubt_id;
    $scope.auxDoubt = {};
    $scope.doubtsList = {};
    $scope.doubt = {};

    $scope.addDoubt = function(tutorial_id){
        console.log("courseController: addDoubt(): ");
        console.log($scope.auxDoubt);
        console.log("tutorial: " + tutorial_id);

        var arr = [];
        arr["title"] = $scope.auxDoubt.title;
        arr["description"] = $scope.auxDoubt.description;
        arr["tutorial_id"] = tutorial_id;


        $api.post("doubt",arr,function(res){
            console.log("courseController->addDoubt(): ");

            console.log(res);
        })
    };


    $scope.getDoubts = function(tutorial_id){
        console.log("courseController: getDoubts("+tutorial_id+"): ");

        $api.get("doubt/tutorial/"+tutorial_id,[],function(res){
            console.log("courseController->getDoubts(): ");

            console.log(res);
            $scope.doubtsList = res;
        })

    };
    $scope.getDoubt = function(doubt_id){
        console.log("courseController: getDoubt("+doubt_id+"): ");

        $api.get("doubt/"+doubt_id,[],function(res){
            console.log("courseController->getDoubts(): ");

            console.log(res);
            $scope.doubt = res;
        })

    };

    $scope.getAll = function(){
        console.log("courseController: getAll(): ");

        $api.get("doubt/",[],function(res){
            console.log("courseController->getAll(): ");

            console.log(res);
            $scope.doubtsList = res;
        })

    };

});