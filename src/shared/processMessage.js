const whatsappModel = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number)
{
    textUser = textUser.toLowerCase();
    var models = [];
    if (textUser.includes("recetas de cocina")) 
    {
        var model = whatsappModel.CocinaMessageButtons(number);
        models.push(model)
    }
    else if (textUser.includes("conejo al horno"))
    {
        var model = whatsappModel.ConejoalHornoMessage("Un sabroso plato, te recomiendo el siguiente video donde podras encontrar mas informacion sobre los platos de conejo: https://www.youtube.com/watch?v=ZmrRYeHI-3o", number);
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
    console.log(models)
    models.forEach(model => {
        whatsappService.SendMessageWhatApp(model)
    });
    

}

module.exports = {
    Process
}