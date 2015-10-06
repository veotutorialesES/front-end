app.controller("dudasController", function($scope,$api,$stateParams){

    angular.element(document).ready(function () {
        console.log('Code highlighting');
        prettyPrint();
    });


    tinymce.init({
        selector: "textarea",
        plugins: [
            "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
            "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
            "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"
        ],

        toolbar1: "bold italic underline strikethrough | alignleft aligncenter | formatselect | bullist numlist | outdent indent | link unlink | hr",
        menubar: false,
        statusbar: false,
        toolbar_items_size: 'small'
    });


    $scope.doubt_id = $stateParams.doubt_id;
    $scope.auxDoubt = {};
    $scope.doubtsList = {};
    $scope.doubt = {};
    $scope.NewAnswer = {};
    $scope.answers = [];
    $scope.comment = {};
    $scope.is_subscribed = false;

    $scope.addDoubt = function(tutorial_id){
        console.log("dudasController: addDoubt(): ");
        console.log($scope.auxDoubt);
        console.log("tutorial: " + tutorial_id);

        var arr = [];
        arr["title"] = $scope.auxDoubt.title;
       // arr["description"] = $scope.auxDoubt.description;
        arr["description"] =tinyMCE.activeEditor.getContent({format : 'raw'});
        arr["tutorial_id"] = tutorial_id;


        $api.post("doubt",arr,function(res){
            console.log("dudasController->addDoubt(): ");

            console.log(res);
        })
    };


    $scope.getDoubts = function(tutorial_id){
        console.log("dudasController: getDoubts("+tutorial_id+"): ");
        var arr = [];
        arr["tutorial_id"] = tutorial_id;
        $api.get("doubt/",arr,function(res){
            $scope.doubtsList = res.data;
        })

    };
    $scope.getDoubt = function(doubt_id){
        console.log("dudasController: getDoubt("+doubt_id+"): ");

        $api.get("doubt/"+doubt_id,[],function(res){
            console.log("dudasController->getDoubt(): ");

            console.log(res);
            $scope.doubt = res.data;
        })

    };

    $scope.getAll = function(){
        console.log("dudasController: getAll(): ");

        $api.get("doubt/",[],function(res){
            console.log("dudasController->getAll(): ");

            console.log(res);
            $scope.doubtsList = res.data;
        })

    };



    $scope.addAnswer = function(doubt_id){
        console.log("dudasController: addAnswer(): ");

        var arr = [];

        arr["description"] = $scope.NewAnswer.description;
        arr["doubt_id"] = doubt_id;


        $api.post("answer",arr,function(res){
            console.log("dudasController->addAnswer(): ");

            console.log(res);
        })
    }


    $scope.getAnswers = function(doubt_id){
        console.info("dudasController: getAnswers("+doubt_id+"): ");

        $api.get("answer/"+doubt_id,[],function(res){
            console.info("dudasController->getAnswers(): ");

            console.log(res);
            $scope.answers = res;
        })

    };

    $scope.getComments = function(answer_id){
        console.info("dudasController: getComments("+answer_id+"): ");

        $api.get("comment/0/"+answer_id,[],function(res){
            console.info("dudasController->getAnswers(): ");

            console.log(res);
            return res;
        })

    };


    $scope.addComment = function(answer_id){
        console.info("dudasController: addComment("+answer_id+"): ");
        var arr = [];

        arr["description"] = $scope.comment.description;
        arr["type_id"] = answer_id;
        arr["type"] = 0;
        console.log(arr);

        $api.post("comment",arr,function(res){
            console.info("dudasController->addComment(): ");

            console.log(res);

        })

    };

    /*
    $scope.subscribe = function(doubt_id){
        console.info("dudasController: subscribe("+doubt_id+")");

        $subscription.add(0,doubt_id,function(res){
            console.info("dudasController->subscribe(): ");
            console.log(res);
            $scope.is_subscribed = true;

        });
    }


    $scope.unsubscribe = function(doubt_id){
        console.info("dudasController: unsubscribe("+doubt_id+")");

        $subscription.delete(0,course_id,function(res){
            console.info("dudasController->unsubscribe(): ");
            console.log(res);
            $scope.is_subscribed = false;
        });
    };

    $scope.check_subscription = function(type_id){
        $subscription.check(0,type_id,function(res){
            $scope.is_subscribed = res;
        });
    };


    $scope.answer_like = function(type_id){

        $like.add(1,type_id, function(res){
            console.info("dudasController->answer_like(): ");
            console.log(res);
        });
    };
    $scope.answer_unlike = function(type_id){

        $like.delete(1,type_id, function(res){
            console.info("dudasController->answer_unlike(): ");
            console.log(res);
        });
    };
*/


});