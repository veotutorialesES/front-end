app.directive("dudasCard", function(){

    return {
        restrict: 'E',
        scope: {
          section: '=info'
        },
        templateUrl: 'app/shared/dudas/dudas-card.html',
        controller: function($scope){
            console.log($scope.section);
            $scope.customer = {
                name:"Salvador",
                address:"paseo de mons"
            }

        }
    };

});