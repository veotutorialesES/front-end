app.service("$module", function($api,$tutorial){
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



    this.find = function(id,callback){


        $api.get("module/"+id,[],function(res){


            res.tutorials = function (){
                //$module.find(res.module_id);
            };

            callback(res);

        });


    };


    this.index = function(id,callback){


        $api.get("module/?course_id="+id,[],function(res){

            //res.tutorials = function (){//$module.find(res.module_id);};

            callback(res);

        });


    };








});