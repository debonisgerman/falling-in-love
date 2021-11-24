import {
    MAIL_CONTACT_REQUEST,
    MAIL_CONTACT_SUCCESS,
    MAIL_CONTACT_FAIL,
} from "../constants/mailConstants";

export const sendMailContactReducer = (state = { contactData: {} }, action) => {
    switch (action.type)
    {
        case MAIL_CONTACT_REQUEST:
            return { loading: true };
        case MAIL_CONTACT_SUCCESS:
            return { loading: false, success: true, contactData: action.payload };
        case MAIL_CONTACT_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};