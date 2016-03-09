app.controller("tutorialController", function($scope,$stateParams){

    $scope.tutorial_id = $stateParams.tutorial_id;

    $scope.course = [];

    $scope.getTutorial = function(tutorial_id){
        /*
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
*/
    };





});