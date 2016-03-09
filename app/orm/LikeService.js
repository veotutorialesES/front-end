app.service("$like", function($api){
   // var self = this;


    this.module = {

        title: null,
        module_id: null,

        init: function(){

        },
        setTitle: function(){
            // validar titulo
        },
        save: function(){
            if (this.module_id != null){
                // update
            }else{
                // insert
            }
        },
        delete: function(){

        }



    };


    this.find = function(id){


        return {
            tutorials: function(){

            }
        }
    };


    this.index = function(id){

        var arr = [];
        arr[0] = {
            module_id: 99,
            course_id: id,
            tutorials: function(){
               // return  $course.find(1)
            }
        };

        return arr;

    };






});