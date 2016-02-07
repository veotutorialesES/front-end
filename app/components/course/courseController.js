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





});