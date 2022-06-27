function transforming(input){


    var data = input.data.intents
    var rows = []
    var schema = {
        "id": "TEXT",
        "fromid": "TEXT",
        "note": "TEXT",
        "quantity": "NUMERIC",
        "unit": "TEXT",
        "date": "DATE",
        "satisfied": "BOOLEAN"
    }

    var rows = []

        
    data.forEach(function(intent){
        var fromid = intent.provider.id
        try{
            if(intent.id != null){
                var id = intent.id
            }else{
                var id = "not given"
            } 
        }catch{
            var id = "not given"
        }
        try{
            if(intent.note != null){
                var note = intent.note
            }else{
                var note = "not given"
            } 
        }catch{
            var note = "not given"
        }
        try{
            if(intent.availableQuantity.hasNumericalValue != null){
                var quantity = intent.availableQuantity.hasNumericalValue
            }
            else{
                var quantity = 0
            }
        }catch{
            var quantity = 0
        }
        try{
            if(intent.availableQuantity.hasUnit.label != null){
                var unit = intent.availableQuantity.hasUnit.label
            }
            else{
                var unit = "not given"
            }
        }
        catch{
            var unit = "not given"
        }
        try{
            if(intent.hasPointInTime != null){
                var date = intent.hasPointInTime
            }else{
                var date = "not given"
            }   
        }
        catch{
            var date = "not given"
        }
        try{
            satisfied = intent.satisfiedBy != null
        }catch{
            satisfied = false
        }
        rows.push([id, fromid, note, quantity, unit, date, satisfied])
    })
            
    

console.log(rows)

    var keys = {
        "primary": ", PRIMARY KEY(id), UNIQUE(id)",
        "foreign": ", FOREIGN KEY(fromid) REFERENCES \"Agents\"(id)"
    }

    var output = {
        "rows": rows,
        "schema": schema,
        "keys": keys
    }

    return output
}