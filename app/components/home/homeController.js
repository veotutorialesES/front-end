app.controller("homeController", function($scope,$api,$state){

    $scope.tutorials = [];
    $scope.calendar = [];



    $scope.getDate = function(){
        var inicio = new Date();
        var d = inicio.getDate() < 10 ? "0" + inicio.getDate() : inicio.getDate();
        var m = (inicio.getMonth() + 1) < 10 ? "0" + (inicio.getMonth() + 1) : (inicio.getMonth() + 1);
        var t = inicio.getFullYear() + "-" + m + "-" + d;
        return t;
    };


    $scope.lastTutorials = function(){

        $api.get("tutorial/",[],function(res){
            $scope.tutorials = res;
            console.log(res)
        });

    };


    function calendarTutorials(tutorials, day){
        console.info("calendarTutorials");
        var arr = [];
        for (var i = 0; i < tutorials.length; i++){
            if (tutorials[i].public_date == day){
                arr.push(tutorials[i]);
            }
        }

        return arr;

    }
    function calendarCourses(courses, day){
        console.info("calendarCourses");
        var arr = [];
        for (var i = 0; i < courses.length; i++){

            if (courses[i].public_date == day){
                arr.push(courses[i]);
            }
        }

        return arr;

    }
    $scope.getCalendar = function(start, dias){
        console.info("homeController: getCalendar("+start+","+dias+")");
        $scope.calendar = [];
        var arr = [];
        arr["start"] = start;
        arr["days"] = dias;
        $api.get("calendar",arr,function(res){
            console.info("homeController->getCalendar(): ");
            console.log(res);
            var dat = start.substring(5,7) + "/" + start.substring(8,10) + "/" + start.substring(0,4);
            console.error(dat);
            var inicio=new Date(dat); // obtener full


            for (var i = 0; i < dias; i++){


                var d = inicio.getDate() < 10 ? "0" + inicio.getDate() : inicio.getDate();
                var m = (inicio.getMonth() + 1) < 10 ? "0" + (inicio.getMonth() + 1) : (inicio.getMonth() + 1);
                var t = inicio.getFullYear() + "-" + m + "-" + d;
                console.log(t);
                $scope.calendar.push({
                    day: dayName(i,inicio),
                    tutorials: calendarTutorials(res.tutorials,t)
                   // courses: calendarCourses(res.courses,t)
                });

                inicio.setDate(inicio.getDate()+1);


            }


        })
    };


    function dayName(i,date){
        if (i == 0){
            return "HOY";
        }
        if (i == 1){
            return "MAÑANA";
        }
        var weekday = new Array(7);
        weekday[0]=  "DOMINGO";
        weekday[1] = "LUNES";
        weekday[2] = "MARTES";
        weekday[3] = "MIERCOLES";
        weekday[4] = "JUEVES";
        weekday[5] = "VIERNES";
        weekday[6] = "SABADO";

        return weekday[date.getDay()];



    }






});