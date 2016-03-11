app.service("$course", function($api,$module,$window,$webSql){
   // var self = this;

    // 1: Instanciar la BD
    var db = $webSql.openDatabase($api.db_name, '1.0', 'Test DB', 2 * 1024 * 1024);


    // borrar base de datos si ha pasado más de X tiempo

    // 2: Crear la tabla
    db.createTable("courses",
        {
            "course_id": {
                "type": "INTEGER",
                "null": "NOT NULL",
                "primary": true
            },
            "title": {
                "type": "TEXT",
                "null": "NOT NULL"
            },
            "description": {
                "type": "TEXT"
            },
            "image": {
                "type": "TEXT"
            },
            "created_at": {
                "type": "TIMESTAMP"
            },
            "updated_at": {
                "type": "TIMESTAMP"
            },
            "user_id": {
                "type": "INTEGER"
            }

        }
    );


    // 3: find method
    this.find = function(id, callback){


        db.select("courses",{
            "course_id": id
        }).then(function(results){

            if (results.rows.length > 0){
                var r = results.rows[0];

                $module.index(r.course_id,function(modulos){

                    r.modules = modulos;

                    console.warn(r);
                    if (callback) callback(r)

                });



            }else{
                $api.get("course/"+id,[],function(res){
                    callback(res);
                    //res.modules;
                    delete res.user;
                    db.insert("courses",res);

                });
            }

        });

    };




    // 4: save   $course.save(COURSE_OBJ) //pero los usuario sno pueden


    // 4: index method if needed

    // course.find(ID)




});