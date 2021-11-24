import asyncHandler from "express-async-handler";
import contactMailer from "../utils/contactMailer.js";


// @desc Send Mail Contacto
// @route POST /api/mails/contactMailer
// @access Public
const sendContactMail = asyncHandler(async (req, res) => {
    const {
        name,
        email,
        address,
        phone,
        commentary
    } = req.body;

    const contactData = {
        name, email, address, phone, commentary
    }

    const sentMail = contactMailer(contactData);

    if (sentMail)
    {
        res.status(200).json({ sent: true });
    } else
    {
        res.status(500).json({ sent: false });
    }
});

export { sendContactMail };