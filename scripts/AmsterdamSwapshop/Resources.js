function transforming(input){

    var data = input.data.economicResources
    var rows = []
    var schema = {
        "id": "TEXT",
        "name": "TEXT",
        "quantity": "NUMERIC",
        "unit": "TEXT",
        "locid": "TEXT"
    }

    data.forEach(function(entry){

        try{
            var id = entry.id
        }catch{
            var id = "not given"
        }
        try{
            var name = entry.name
        }catch{
            var name = "not given"
        }
        try{
            var quantity = entry.accountingQuantity.hasNumericalValue
        }catch{
            var quantity = 0
        }
        try{
            var unit = entry.accountingQuantity.hasUnit.label
        }catch{
            var unit = "not given"
        }
        try{
            var locID = entry.currentLocation.id
        }catch{
            var locID = "not given"
        }
        
        
        
        rows.push([id, name, quantity, unit, locID])
    });

    var keys = {
        "primary": ", PRIMARY KEY(id), UNIQUE(id)", //mandatory
        "foreign": ", FOREIGN KEY(locid) REFERENCES locations(id)" //only set if needed; if not needed: delete field
    }

    var output = {
        "rows": rows,
        "schema": schema,
        "keys": keys
    }

    return output
}