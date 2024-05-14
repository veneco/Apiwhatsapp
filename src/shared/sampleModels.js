function SampleText(textResponse, number)
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

function SampleImage(number)
{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image":{
            "link": "https://concepto.de/wp-content/uploads/2020/12/imagen-e1607991758274-800x400.jpg"
        },
        

    });

    return data;
}

function SampleAudio(number)
{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "audio",
        "audio":{
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
        },
        

    });

    return data;
}

function SampleVideo(number)
{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "video",
        "video":{
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
        },
        

    });

    return data;
}

function SampleDocument(number)
{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "document",
        "document":{
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf"
        },
        

    });

    return data;
}

function SampleButtons(number)
{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": { 
                "text":"Confirmar tu registro?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Si"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "no"
                        }
                    }
                ]
            }
        }
    });

    return data;
}

function SampleList(number)
{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": { 
                "text":"Confirmar tu registro?"
            },
            "footer":{
                "text":"Selcciona una de las alternativas"
            },
            "action": {
                "buttons": "Ver opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Compra",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "Vender",
                                "description": "Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "Centro de atención",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agencia",
                                "description": "Puedes visitar nuestra agencia"
                            },
                            {
                                "id": "main-contratar",
                                "title": "Centro de contacto",
                                "description": "Te atendera uno de los agentes"
                            }
                        ]
                    }
                ]
            }
        }
    });

    return data;
}

function SampleLocation(number)
{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
            "latitude": "-33.44236141582968", 
            "longitude": "-70.65397961447488",
            "name": "Palacio de la Moneda",
            "adress": "Moneda S/N, Santiago, Región Metropolitana"
        }
    });

    return data;
}

module.exports = {
    SampleText,
    SampleImage,
    SampleAudio,
    SampleVideo,
    SampleDocument,
    SampleButtons,
    SampleList,
    SampleLocation
}