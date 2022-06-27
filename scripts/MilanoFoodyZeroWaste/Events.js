function transforming(input){


    var data = input.data.economicEventsFiltered
    var rows = []
    var schema = {
        "id": "TEXT",
        "action": "TEXT",
        "date": "DATE",
        "receiver": "TEXT",
        "quantity": "NUMERIC",
        "unit": "TEXT",
        "resource": "TEXT"
    }
    var forbiddenEvents = ["01FW1CW5D981XA7912559ZZBES", "01FW1CYVDA6ZDXXD1XMJK7D3KJ", "01FVVWM4JHEMPMH224BBAD26MW", "01FW1CW58HP9S4E65QFZ8AB4HY", "01FWRSFQ29JE58N8B905T11VDN", "01FWRSFQA8QW8K7GHWFHB2EWGE"]

    var rows = []

        data.forEach(function(event){
            if(!forbiddenEvents.includes(event.id)){
                try{
                    var id = event.id
                }catch{
                    var id = "not given"
                }
                try{
                    var action = event.action.label
                }catch{
                    var action = "not given"
                }
                try{
                    var date = event.hasPointInTime
                }catch{
                    var date = "not given"
                }
                try{
                    var receiver = event.receiver.id
                }catch{
                    var receiver = "not given"
                }
                try{
                    var quantity = event.resourceQuantity.hasNumericalValue
                }catch{
                    var quantity = 0
                }
                try{
                    var unit = event.resourceQuantity.hasUnit.label
                }catch{
                    var unit = "not given"
                }
                try{
                    var resource = event.resourceInventoriedAs.name
                }catch{
                    var resource = "not given"
                }

                rows.push([id, action, date, receiver, quantity, unit, resource])

                if(action == "produce"){
                    id = Math.random().toString().substring(2)
                    action = "consume"
                    quantity = 0
                    
                    rows.push([id, action, date, receiver, quantity, unit, resource])  
                }
            }
    })


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