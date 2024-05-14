const expres = require("express");
const router = expres.Router();
const WhatsAppController = require ("../controllers/whatappController");

router
.get("/", WhatsAppController.VerifyToken)
.post("/", WhatsAppController.ReceivedMessage)


module.exports = router;

