const express = require("express");
const router = express.Router();
const {sendMail} = require("../utils/mailFunctions")


router.post("/send", (req,res) =>{
    const { senderName, senderMail, receiverMail, messageContent } = req.body;
    if (!senderName || !receiverMail || !messageContent || !senderMail) {
        return res.status(400).send("Bad request. Missing parametres.");
    }
    //receiver, sender, subject, msg
    const mailSentResponseCode = sendMail(receiverMail, senderMail, "You've got a message!", messageContent);
    return res.json({
        responseCode: mailSentResponseCode,
    });
})

module.exports = router;