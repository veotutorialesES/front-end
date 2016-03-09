app.service("$course", function($api,$module){
   // var self = this;


    this.find = function(id, callback){

            // Comprobar si está en la base de datos


        $api.get("course/"+id,[],function(res){


            // Almacenar en la BD
/*
            res.modules = function (callback){
                 $module.index(res.course_id, function(res){
                     callback(res);
                 });
            };
*/
            callback(res);

        });


    };






    this.course = {
        modules: [],
        find: function(id){

        }

    }

    // course.find(ID)




});