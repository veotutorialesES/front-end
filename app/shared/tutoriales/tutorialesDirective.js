app.directive("tutorialCard", function(){

    return {
        restrict: 'E',
        scope: {
          section: '=info'
        },
        templateUrl: 'app/shared/tutoriales/tutoriales-card.html',
        controller: function($scope){
            console.log($scope.section);
            $scope.customer = {
                name:"Salvador",
                address:"paseo de mons"
            }

        }
    };

});