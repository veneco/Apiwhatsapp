const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs/logs.txt"));
const processMessage = require("../shared/processMessage");
const { Console } = require("console");

const VerifyToken = (req, res) => {

    try {
        var accessToken = "JANSDAASJDASND0823123ADDASD";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if(challenge != null && token != null && token == accessToken)
            {
                res.send(challenge)
            }
            else
            {
                res.status(400).send();
            }
    } catch (error) {
        res.status(400).send();
    }

} 

const ReceivedMessage = (req, res) => {
    try {

        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var messageObject = value["messages"];
        if (messageObject != "undefined")         
        {
            var messages = messageObject[0];
            var number = messages["from"];
            var text = GetTextUser(messages);
            if(text != "")
            {
                processMessage.Process(text, number)
            }/*
            else if(text == "image")
            {
                var data = samples.SampleImage(number);
                whatsappService.SendMessageWhatApp(data)
            }
            else if(text == "video")
            {
                var data = samples.SampleVideo(number);
                whatsappService.SendMessageWhatApp(data)
            }
            else if(text == "audio")
            {
                var data = samples.SampleAudio(number);
                whatsappService.SendMessageWhatApp(data)
            }
            else if(text == "document")
            {
                var data = samples.SampleDocument(number);
                whatsappService.SendMessageWhatApp(data)
            }
            else if(text == "button")
            {
                var data = samples.SampleButtons(number);
                whatsappService.SendMessageWhatApp(data)
            }
            else if(text == "list")
            {
                var data = samples.SampleList(number);
                whatsappService.SendMessageWhatApp(data)
            }
            else if(text == "location")
            {
                var data = samples.SampleLocation(number);
                whatsappService.SendMessageWhatApp(data)
            }
            else
            {
                var data = samples.SampleText("no entiendo", number);
                whatsappService.SendMessageWhatApp(data)          
            }  */       
        }

        res.send("EVENT_RECEIVED");
    } catch (error) {
        res.send("EVENT_RECEIVED");
        myConsole.log(error);
    }

} 

function GetTextUser(messages)
{
    var text ="";
    var typeMessge = messages["type"];

    if (typeMessge == "text") 
    {

        text = (messages["text"])["body"];
    }
    else if (typeMessge == "interactive")  
    {

        var interactiveObject = messages["interactive"];
        var typeinteractive = interactiveObject["type"];
        if(typeinteractive == "button_reply")
        {

            text = (interactiveObject["button_reply"])["title"]
            
        }
        else if(typeinteractive == "list_reply"){
            text = (interactiveObject["list_replay"])["title"]
        }
        else
        {
            console.log("sin mensaje")
        }
    }
    else
    {
        console.log("sin mensaje")
    }
    return text;
}

module.exports ={
    VerifyToken,
    ReceivedMessage
}