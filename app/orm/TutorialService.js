app.service("$tutorial", function($api,$webSql){
    var self = this;
    var db = $webSql.openDatabase($api.db_name, '1.0', 'Test DB', 2 * 1024 * 1024);


    db.createTable("tutorials",
        {
            "tutorial_id": {
                "type": "INTEGER",
                "null": "NOT NULL",
                "primary": true
            },
            "module_id": {
                "type": "INTEGER"
            },
            "course_id": {
                "type": "INTEGER"
            },
            "title": {
                "type": "TEXT",
                "null": "NOT NULL"
            },
            "description": {
                "type": "TEXT"
            },
            "video_url": {
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
            },
            "image": {
                "type": "TEXT"
            }


        }
    );


    this.insert = function(obj){
        db.insert("tutorials",obj);

    }

    this.find = function(id){


        return {
            tutorials: function(){

            }
        }
    };

    // 3: find method
    this.index = function(id, callback){


        db.select("tutorials",{
            "module_id": id
        }).then(function(results){

            if (results.rows.length > 0){
                var r = [];
                for (var i = 0; i < results.rows.length; i++){
                    r.push(results.rows[i]);
                }
                if (callback) callback(r)
            }else{
                $api.get("tutorial/?module_id="+id,[],function(res){

                    for (var i = 0; i < res.length; i++){
                        var r = res[i];
                       // delete r.tutorials;
                        console.log(r);
                        self.insert(r);
                    }
                    console.warn(res);

                    //
                    callback(res);
                });
            }

        });

    };





});