const VerifyToken = (req, res) => {
    res.send("verificar token")

} 

const ReceivedMessage = (req, res) => {
    res.send("verificar recibido")

} 

module.exports ={
    VerifyToken,
    ReceivedMessage
}