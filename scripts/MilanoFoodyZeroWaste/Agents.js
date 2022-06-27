function transforming(input){

    var data = input.data.agents
    var rows = []
    var schema = {
        "id": "TEXT",
        "name": "TEXT"
    }

    data.forEach(function(agent){

        try{
            var id = agent.id
        }catch{
            var id = "not given"
        }
        try{
            var name = agent.name
        }catch{
            var name = "not given"
        }
        
        rows.push([id, name])
    });

    var keys = {
        "primary": ", PRIMARY KEY(id), UNIQUE(id)", //mandatory
    }

    var output = {
        "rows": rows,
        "schema": schema,
        "keys": keys
    }

    return output
}