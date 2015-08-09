angular.module("app.data", [])

    .service("$data", function($http){

        console.log("Service called");

        this.login = function(){
            console.log("You are login");
        }


        this.getCourses = function(){
            $http.get("http://localhost:8000/api/v1/test",{token:"askdjfh"}).then(function(res){
                console.log(res.data);
            });
        }
        
        
        // 2 data ways
        
        // Download all user no sensible data (tutoriales vistos,)
        
        // Download web data (courses, tutorials) from cache
        
        // Download dudas from cache (renew every X)


    });