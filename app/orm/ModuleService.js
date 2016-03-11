app.service("$module", function($api,$webSql,$tutorial){
   // var self = this;

    var db = $webSql.openDatabase($api.db_name, '1.0', 'Test DB', 2 * 1024 * 1024);

    db.createTable("modules",
        {
            "module_id": {
                "type": "INTEGER",
                "null": "NOT NULL",
                "primary": true
            },
            "title": {
                "type": "TEXT",
                "null": "NOT NULL"
            },

            "created_at": {
                "type": "TIMESTAMP"
            },
            "updated_at": {
                "type": "TIMESTAMP"
            },
            "user_id": {
                "type": "INTEGER"
            },
            "course_id": {
                "type": "INTEGER"
            }

        }
    );


    this.insert = function(obj){
        db.insert("modules",obj);

    }


    // 3: find method
    this.index = function(id, callback){


        db.select("modules",{
            "course_id": id
        }).then(function(results){

            if (results.rows.length > 0){

                var r = [];
                for (var i = 0; i < results.rows.length; i++){



                    r.push(results.rows[i]);
                }


                $tutorial.index(r[0].module_id,function(res){
                        r[0].tutorials = res;
                    if (callback) callback(r)
                })



            }else{
                $api.get("module/?course_id="+id,[],function(res){

                    for (var i = 0; i < res.length; i++){
                        var r = res[i];

                        for (var u = 0; u < r.tutorials.length; u++){
                            $tutorial.insert(r.tutorials[u]);

                        }

                        delete r.tutorials;

                        db.insert("modules",r);
                    }
                    console.warn(res);

                   //
                    callback(res);
                });
            }

        });

    };



    // by ID
    this.find = function(id,callback){


        $api.get("module/"+id,[],function(res){


            res.tutorials = function (){
                //$module.find(res.module_id);
            };

            callback(res);

        });


    };

/*
    // by parent_id
    this.index = function(id,callback){


        $api.get("module/?course_id="+id,[],function(res){

            //res.tutorials = function (){//$module.find(res.module_id);};

            callback(res);

        });


    };


*/





});