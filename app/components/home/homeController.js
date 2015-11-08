app.controller("homeController", function($scope,$api,$state,$rootScope){

    $scope.tutorials = [];
    $scope.calendar = [];

    $rootScope.loading = true;
    $rootScope.loadingArr = [];
    $scope.addLoading = function(data){

        $rootScope.loadingArr.push(data);

        if ($scope.loadingArr.length == 2){
            $rootScope.loading = false;
        }


    };

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
            $scope.addLoading({
                title: "Tutorials",
                status: "true"
            });
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
    /*
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
    */
    $scope.getCalendar = function(start, dias){
        console.info("homeController: getCalendar("+start+","+dias+")");
        $scope.calendar = [];
        var arr = [];
        arr["start"] = start;
        arr["days"] = dias;
        var tmp = [];
        $api.get("calendar",arr,function(res){

            var dat = start.substring(5,7) + "/" + start.substring(8,10) + "/" + start.substring(0,4);
            var inicio=new Date(dat); // obtener full


            for (var i = 0; i < dias; i++){


                var d = inicio.getDate() < 10 ? "0" + inicio.getDate() : inicio.getDate();
                var m = (inicio.getMonth() + 1) < 10 ? "0" + (inicio.getMonth() + 1) : (inicio.getMonth() + 1);
                var t = inicio.getFullYear() + "-" + m + "-" + d;
                var tutos = calendarTutorials(res.tutorials,t);


                // TODO organizar segun resultados
                var len = tutos.length > 0 ? 3 : 1;
                //if (tutos.length > 0) {
                //console.log(dayName(i, inicio));
                var dayNameObj = dayName(i, inicio);

                console.log(dayNameObj);

                if (dayNameObj.weekday != 0) {
                    tmp.push({
                        day: dayNameObj,
                        tutorials: tutos,
                        len: len
                        // courses: calendarCourses(res.courses,t)
                    });
                }
                //}
                inicio.setDate(inicio.getDate()+1);


            }

            $scope.calendar = tmp;
            $scope.addLoading({
                title: "calendar",
                status: "true"
            });
        });



    };


    function dayName(i,date){
        /*
        if (i == 0){
            return "HOY";
        }
        if (i == 1){
            return "MAÑANA";
        }
        */
        var weekday = new Array(7);
        weekday[0]=  "SAB/DOM";
        weekday[1] = "LUNES";
        weekday[2] = "MARTES";
        weekday[3] = "MIERCOLES";
        weekday[4] = "JUEVES";
        weekday[5] = "VIERNES";
        weekday[6] = "SAB/DOM";


        var month = new Array(12);

        month[0] = "ENE";
        month[1] = "FEB";
        month[2] = "MAR";
        month[3] = "ABR";
        month[4] = "MAY";
        month[5] = "JUN";
        month[6] = "JUL";
        month[7] = "AGO";
        month[8] = "SEP";
        month[9] = "OCT";
        month[10] = "NOV";
        month[11] = "DIC";

        var d = new Date();



        return {
            name: weekday[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()],
            weekday: date.getDay(),
            day: date.getDate(),
            today:(date.getDate() == d.getDate())
        }






    }






});