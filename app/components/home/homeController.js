app.controller("homeController", function($scope,$data,$api){

    $scope.tutorials = [];


    $scope.lastTutorials = function(){

        $api.get("tutorial/last",[],function(res){

            $scope.tutorials = res;
            console.log(res)
        });


    };



    $data.getCourses();


    $scope.calendar = {
        lunes:[
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            },
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            }
        ],
        martes:[
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            }
        ],
        miercoles:[

        ],
        jueves:[
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            }
        ],
        viernes:[
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            },
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            },
            {
                name: "Introducción a JAVA (T01)",
                id: "12"
            }
        ]
    }

});