app.service("$course", function($api,$rootScope,$http,$window,$module){
   // var self = this;


    this.find = function(id){


        return {
            modules: function(){
                return $module.index(3);
            }
        }
    };






    this.course = {
        modules: [],
        find: function(id){

        }

    }

    // course.find(ID)




});