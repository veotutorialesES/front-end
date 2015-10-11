app.controller("searchController", function($scope,$stateParams,$state){

    $scope.type = $stateParams.type;
    $scope.q = $stateParams.q;
    $scope.filters = [];

    $scope.changeType = function(type){
        $scope.filters = [];
        var arr = [];
        switch (type){
            case 0: $scope.type = 'all'; break;
            case 1: $scope.type = 'cursos';
                break;
            case 2: $scope.type = 'tutoriales';

                break;
            case 3: $scope.type = 'dudas'; break;
            default : $scope.type = 'all'; break;

        }
        $state.go('search',{type:$scope.type});

    };

    $scope.setFilter = function(){
        // TODO implement this
    };

    $scope.setFilters = function(){
        var arr = [];
        switch ($scope.type){
            case 'all':

                break;
            case 'cursos':
                arr.push({title:'tutoriales',selected:0});
                break;
            case 'tutoriales':
                arr.push({title:'Dudas',selected:0});
                arr.push({title:'Duracion',selected:0});

                break;
            case 'dudas':

                break;
        }

        $scope.filters = arr;
    };
    $scope.setFilters();



    $scope.search = function(){
        var arr = [];
        arr['q'] = $scope.q;
        arr['type'] = $scope.q;
        //TODO implement this
    }


});