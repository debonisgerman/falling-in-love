import axios from "axios";
import {
    MAIL_CONTACT_REQUEST,
    MAIL_CONTACT_SUCCESS,
    MAIL_CONTACT_FAIL,
} from "../constants/mailConstants";

export const sendMailContact = (contactData) => async (dispatch, getState) => {
    try
    {
        dispatch({
            type: MAIL_CONTACT_REQUEST,
        });


        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            `/api/mails/contactMailer`,
            contactData,
            config
        );

        dispatch({
            type: MAIL_CONTACT_SUCCESS,
            payload: data,
        });
    } catch (error)
    {
        dispatch({
            type: MAIL_CONTACT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};