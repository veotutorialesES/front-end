app.controller("searchController", function($scope,$stateParams,$state){

    $scope.type = $stateParams.type;
    $scope.q = $stateParams.q;


    $scope.changeType = function(type){

        switch (type){
            case 0: $scope.type = 'all'; break;
            case 1: $scope.type = 'cursos'; break;
            case 2: $scope.type = 'tutoriales'; break;
            case 3: $scope.type = 'dudas'; break;
        }
        $state.go('search',{type:$scope.type});

    }


});