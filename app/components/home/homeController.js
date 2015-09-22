app.controller("homeController", function($scope,$api){

    $scope.tutorials = [];
    $scope.calendar = [];



    $scope.getDate = function(){
        var inicio = new Date();
        var d = inicio.getDate() < 10 ? "0" + inicio.getDate() : inicio.getDate();
        var m = (inicio.getMonth() + 1) < 10 ? "0" + (inicio.getMonth() + 1) : (inicio.getMonth() + 1);
        var t = inicio.getFullYear() + "-" + m + "-" + d;
        console.error(t);
        return t;
    };


    $scope.lastTutorials = function(){

        $api.get("tutorial/last",[],function(res){

            $scope.tutorials = res;
            console.log(res)
        });


    };


    function calendarTutorials(tutorials, day){
        console.info("calendarTutorials");
        var arr = [];
        for (var i = 0; i < tutorials.length; i++){
        console.log(tutorials[i].public_date);
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
        $api.post("calendar",arr,function(res){
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
                    day: t,
                    tutorials: calendarTutorials(res.tutorials,t),
                    courses: calendarCourses(res.courses,t)
                });

                inicio.setDate(inicio.getDate()+1);


            }


        })
    };




});