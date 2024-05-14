const VerifyToken = (req, res) => {

    try {
        var accessToken = "JANSDAASJDASND0823123ADDASD";
        var token = req.query["hub.verify_token"];
        var challenge = req.body["hub.challenge"];

        if(challenge != null && token != null && token == accessToken)
            {
                res.sned(challenge)
            }
            else
            {
                res.status(400).send();
            }
    } catch (error) {
        res.status(400).send();
    }
    res.send("verificar token")

} 

const ReceivedMessage = (req, res) => {
    res.send("verificar recibido")

} 

module.exports ={
    VerifyToken,
    ReceivedMessage
}