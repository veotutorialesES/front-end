app.controller("homeController", function($scope,$data){
    $scope.data = "Dataaaaaaaaaaaa";


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