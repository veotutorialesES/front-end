app.directive("dudasCard", function(){

    return {
        restrict: 'E',
        scope: {
          doubt: '=info'
        },
        templateUrl: 'app/shared/dudas/dudas-card.html',
        controller: function($scope){
            //console.log($scope.section);


        }
    };

});