const whatsappModel = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number)
{
    textUser = textUser.toLowerCase();
    console.log(textUser)
    var models = [];
    if (textUser("tittle").includes("recetas de cocina")) 
    {
        console.log(textUser("tittle"))
        var model = whatsappModel.CocinaMessageButtons(number);
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
        var model = whatsappModel.IndexButtons(number);
        models.push(model)
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatApp(model)
    });
    

}

module.exports = {
    Process
}