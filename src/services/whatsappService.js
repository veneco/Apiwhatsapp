const https = require("https");

function SendMessageWhatApp(textResponse, number)
{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text":{
            "body": textResponse
        },
        "type": "text"

    });

    const options = {
        host: "graph.facebook.com",
        path: "/v19.0/165335166668859/messages",
        method: "POST",
        body: data,
        headers: 
        {
            "Content-Type": "applecation/json",
            Authorization: "Bearer EAAGeUR8MUroBO76X41gD87FOc0yf4xR3gw1OTiIu2mJbYp4t8wLh3po1MVM2LVhTDC5MzuStIRjZCvdiBhPYF1aK5rg7ehbOdxxnior69kraRpu1PjmQAxiD2hdJvD2RaUzhmivI9YcWXpfa2VYjjZCqyBvqZCg9VcVUdZCaS5NX37TZCh7EiKNmiFq1JgMHj"
        }
    };

    const req = https.request(options, res =>{
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatApp
}