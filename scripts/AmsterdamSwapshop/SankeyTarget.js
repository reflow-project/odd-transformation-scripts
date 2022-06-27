function transforming(input){

    var data = input.data.economicResources
    var rows = []
    var schema = {
        "id": "TEXT",
        "source": "TEXT",
        "target": "TEXT"
    }

    data.forEach(function(entry){
        try{
            var id = entry.id
        }catch{
            var id = "not given"
        }
        try{
            var source = entry.name
        }catch{
            var source = "not specified"
        }
        try{
            if(entry.note != entry.name){
                var target = entry.note
            }else{
                var target = "no decomposition"
            }
        }catch{
            var source = "no decomposition"
        }

        rows.push([id, source, target])
       
    });

    var keys = {
        "primary": ", PRIMARY KEY(id), UNIQUE(id)"
    }

    var output = {
        "rows": rows,
        "schema": schema,
        "keys": keys
    }

    return output
}