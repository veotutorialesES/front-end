angular.module("app.data", [])

    .service("$data", function(){

        console.log("Service called");

        this.login = function(){
            console.log("You are login");
        }

    });