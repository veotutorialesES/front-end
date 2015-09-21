app.controller("suscripcionController", function($scope,$api){

    $scope.items = [];

    $scope.subscriptions = function(type) {
        console.info("subscriptionController: subscriptions()")

        $api.subscriptions(type, function (res) {
            console.info("subscriptionController->subscriptions()")
            console.log(res);
            $scope.items = res;
        })
    }


    $scope.unsubscribe = function(type, type_id){
        console.info("subscriptionController: unsubscribe("+type+","+type_id+")");

        $api.unsubscribe(type,type_id, function(res){
            console.info("subscriptionController->unsubscribe()")
            console.log(res);
            $scope.subscriptions(type); // TODO eliminar manualmente del array
        });
    }



});