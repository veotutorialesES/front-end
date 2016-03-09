app.service("$dataService", function($api,$rootScope,$http,$window){
    var self = this;

    self.source = {
        lista: [],
        add: function(section,route,id, params){
            var obj = {
                id: id,
                section: section,
                route: route,
                params: params,
                response: null,
                calls: 0,
                last_call: 0
            };
           // this.list.add(obj);
            this.lista[this.lista.length] = obj;
        },
        search: function(id){
            for (var i = 0; i < this.lista.length;i++){
                if (this.lista[i].id == id){
                    return this.lista[i];
                }
            }

            return null;
        },
        searchBySection: function(section){
            var arr = [];
            for (var i = 0; i < this.lista.length;i++){
                if (this.lista[i].section == section){
                    arr[arr.length] = i; //this.lista[i];
                }
            }

            return arr;
        },
        sync: function(){
            // recuperar toda la información disponible de la base de datos local
        }

    };

    // TODO deja de funcionar si metes mal algun parametro

    // home
    self.source.add("home","calendar","0001",{start:"2015-11-02",days:7});


    // course
   //self.source.add("course","course/21","0002",{type:3});



    self.SourceDownload = function(index, callback){
        var obj = self.source.lista[index];
        var arr = [];

        for (var k in obj.params){
           // alert("Key is " + k + ", value is" + obj.params[k]);
            arr[k] = obj.params[k];
        }


        console.log(arr);
        $api.get(obj.route,arr,function(res) {
            self.source.lista[index].response = res;
            self.source.lista[index].calls++;
            console.log("RESPUESTA");
            console.log(res);
            callback(true);

        });
    };



    self.SectionDownload = function(section, callback){

        var sources = self.source.searchBySection(section);
        var count = sources.length;
        for (var i = 0; i < sources.length; i++){
            self.SourceDownload(sources[i],function(){
                count--;
                if (count == 0){
                    //alert("TODO DESCARGADO");
                    callback(true);
                }
            })
        }


    }


    self.IsSectionDownloaded = function(section){
        var sources = self.source.searchBySection(section);
        var count = sources.length;

        for (var i = 0; i < sources.length; i++){
            if (self.source.lista[sources[i]].calls < 1 ){
                return false;
            }
        }
        return true;
    }

    // HOME


    // SEARCH


    // MEDIA


});