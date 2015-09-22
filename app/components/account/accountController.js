app.controller("accountController", function($scope,$subscription){
    $scope.subscriptionItems = [];

    $scope.subscriptions = function(type) {
        console.info("subscriptionController: subscriptions()")

        $subscription.list(type, function (res) {
            console.info("subscriptionController->subscriptions()")
            console.log(res);
            $scope.subscriptionItems = res;
        })
    }


    $scope.unsubscribe = function(type, type_id){
        console.info("subscriptionController: unsubscribe("+type+","+type_id+")");

        $subscription.delete(type,type_id, function(res){
            console.info("subscriptionController->unsubscribe()")
            console.log(res);
            $scope.subscriptions(type); // TODO eliminar manualmente del array
        });
    }






});