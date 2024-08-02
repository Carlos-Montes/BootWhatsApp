const expres = require("express");
const router = expres.Router();
const WhatsAppControllers = require("../controllers/WhatsAppControllers");

router
.get("/", WhatsAppControllers.VerifyToken)
.post("/", WhatsAppControllers.ReceivedMessage)


module.exports = router;

