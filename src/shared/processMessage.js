const whatsappModel = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number)
{
    textUser = textUser.toLowerCase();
    var models = [];
    if (textUser.includes("hola")) 
    {
        var model = whatsappModel.MessageText("hola, en que puedo ayudarte", number);
        models.push(model)
    }
    else if (textUser.includes("gracias"))
    {
        var model = whatsappModel.MessageText("gracias por escribirme", number);
        models.push(model)
    } 
    else if (textUser.includes("adios"))
    {
        var model = whatsappModel.MessageText("hastas luego", number);
        models.push(model)
    } else
    {
        var model = whatsappModel.MessageText("no entiendo", number);
        models.push(model)
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatApp(model)
    });
    

}

module.exports = {
    Process
}