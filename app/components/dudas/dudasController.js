app.controller("dudasController", function($scope,$api,$stateParams){

    angular.element(document).ready(function () {
        console.log('Code highlighting');
        prettyPrint();
    });

    $scope.doubt_id = $stateParams.doubt_id;
    $scope.auxDoubt = {};
    $scope.doubtsList = {};
    $scope.doubt = {};
    $scope.NewAnswer = {};
    $scope.answers = [];
    $scope.comment = {};

    $scope.addDoubt = function(tutorial_id){
        console.log("dudasController: addDoubt(): ");
        console.log($scope.auxDoubt);
        console.log("tutorial: " + tutorial_id);

        var arr = [];
        arr["title"] = $scope.auxDoubt.title;
        arr["description"] = $scope.auxDoubt.description;
        arr["tutorial_id"] = tutorial_id;


        $api.post("doubt",arr,function(res){
            console.log("dudasController->addDoubt(): ");

            console.log(res);
        })
    };


    $scope.getDoubts = function(tutorial_id){
        console.log("dudasController: getDoubts("+tutorial_id+"): ");

        $api.get("doubt/tutorial/"+tutorial_id,[],function(res){
            console.log("dudasController->getDoubts(): ");

            console.log(res);
            $scope.doubtsList = res;
        })

    };
    $scope.getDoubt = function(doubt_id){
        console.log("dudasController: getDoubt("+doubt_id+"): ");

        $api.get("doubt/"+doubt_id,[],function(res){
            console.log("dudasController->getDoubts(): ");

            console.log(res);
            $scope.doubt = res;
        })

    };

    $scope.getAll = function(){
        console.log("dudasController: getAll(): ");

        $api.get("doubt/",[],function(res){
            console.log("dudasController->getAll(): ");

            console.log(res);
            $scope.doubtsList = res;
        })

    };



    $scope.addAnswer = function(doubt_id){
        console.log("dudasController: addAnswer(): ");

        var arr = [];

        arr["description"] = $scope.NewAnswer.description;
        arr["doubt_id"] = doubt_id;


        $api.post("doubt/answer",arr,function(res){
            console.log("dudasController->addAnswer(): ");

            console.log(res);
        })
    }


    $scope.getAnswers = function(doubt_id){
        console.log("dudasController: getAnswers("+doubt_id+"): ");

        $api.get("doubt/answer/"+doubt_id,[],function(res){
            console.log("dudasController->getAnswers(): ");

            console.log(res);
            $scope.answers = res;
        })

    };

    $scope.getComments = function(answer_id){
        console.log("dudasController: getComments("+answer_id+"): ");

        $api.get("comment/0/"+answer_id,[],function(res){
            console.log("dudasController->getAnswers(): ");

            console.log(res);
            return res;
        })

    };


    $scope.addComment = function(answer_id){
        console.info("dudasController: addComment("+answer_id+"): ");
        console.warn(answer_id);
        var arr = [];

        arr["description"] = $scope.comment.description;
        arr["type_id"] = answer_id;
        arr["type"] = 0;
        console.log(arr);

        $api.post("comment",arr,function(res){
            console.info("dudasController->addComment(): ");

            console.log(res);

        })

    }

});