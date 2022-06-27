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
            var target = entry.name
        }catch{
            var target = "not specified"
        }
        try{
            var source = entry.containedIn.name
        }catch{
            var source = "no source"
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