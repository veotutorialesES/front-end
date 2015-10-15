app.controller("searchController", function($scope,$stateParams,$state,$api){

    $scope.type = $stateParams.type;
    $scope.q = $stateParams.q;
    $scope.filters = [];
    $scope.result = {};
    $scope.size = 10;
    $scope.from = 0;

    $scope.changeType = function(type){
        $scope.filters = [];
        var arr = [];
        switch (type){
            case 0: $scope.type = 'all'; break;
            case 1: $scope.type = 'courses';
                break;
            case 2: $scope.type = 'tutorials';

                break;
            case 3: $scope.type = 'doubts'; break;
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
        arr['type'] = $scope.type;
        arr['from'] = $scope.from;
        arr['size'] = $scope.size;
        //TODO implement this
        $api.get("search",arr,function(res){
            console.info(res);
            $scope.result = res.data;
        });
    }





});