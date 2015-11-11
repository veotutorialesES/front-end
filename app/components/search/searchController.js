app.controller("searchController", function($scope,$stateParams,$state,$api){

    $scope.type = $stateParams.type;
    $scope.q = $stateParams.q;
    $scope.filters = [];
    $scope.result = {};
    $scope.size = 10;
    $scope.from = 0;
    $scope.currentPage = $stateParams.page;
    $scope.pages = [];


    $scope.filter = function(type, page){

        $state.go('search',{type:type,page:page});

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

        $scope.currentPage = $stateParams.page;

        var arr = [];
        arr['q'] = $scope.q;
        arr['type'] = $scope.type;
        arr['from'] = $scope.currentPage * $scope.size;
        arr['size'] = $scope.size;



        console.info(location.href);

        //TODO implement this
        $api.get("search",arr,function(res){
            $scope.result = res.data;

            var total = res.data.hits.total;
            var p = Math.ceil(total / $scope.size);
            var pages = [];
            for (var i = 0; i < p; i++){
                pages.push({
                    num: i
                })
            }
            $scope.pages = pages;



        });
    }


    $scope.getUrl = function(element){


        console.info(element);
            var url = "";
        if (element._type == "courses"){
            url = $state.href("course",{course_id:element._id});
        }

        if (element._type == "tutorials"){
            url = $state.href("tutorial",{course_id:element._source.course_id,tutorial_id:element._id});
        }


        return url;

        //$state.go(where + "/" + id);

    }




});