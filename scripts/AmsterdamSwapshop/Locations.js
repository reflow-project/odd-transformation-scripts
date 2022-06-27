function transforming(input){

    var data = input.data.economicResources
    var rows = []
    var schema = {
        "id": "TEXT",
        "name": "TEXT",
        "lat": "NUMERIC",
        "long": "NUMERIC"
    }

    data.forEach(function(entry){

        try{
            var id = entry.currentLocation.id
        }catch{
            var id = "not given"
        }
        try{
            var name = entry.currentLocation.name
        }catch{
            var name = "not given"
        }
        try{
            var lat = entry.currentLocation.lat
        }catch{
            var lat = "not given"
        }
        try{
            var long = entry.currentLocation.long
        }catch{
            var long = "not given"
        }
        
        
        
        rows.push([id, name, lat, long])
    });

    var keys = {
        "primary": ", PRIMARY KEY(id), UNIQUE(id)" //mandatory
    }

    var output = {
        "rows": rows,
        "schema": schema,
        "keys": keys
    }

    return output
}