import express from "express";
const router = express.Router();
import {
    sendContactMail
} from '../controllers/mailController.js'

router.route("/contactMailer").post(sendContactMail);

export default router;