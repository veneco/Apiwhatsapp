function MessageText(textResponse, number)
{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text":{
            "body": textResponse
        },
        "type": "text"
    });
    return data;
}

function IndexButtons(number)
{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": { 
                "text":"En que te puedo ayudar"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Recetas de cocina"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "Mecanico"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "003",
                            "title": "Videojuegos"
                        }
                    }
                ]
            }
        }
    });

    return data;
}

function CocinaMessageButtons(number)
{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": { 
                "text":"Que plato te gusta mas?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Conejo al Horno"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "Arroz con Porotos"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "003",
                            "title": "Sopa de Res"
                        }
                    }
                ]
            }
        }
    });

    return data;
}


module.exports = {
    MessageText,
    IndexButtons,
    CocinaMessageButtons
}