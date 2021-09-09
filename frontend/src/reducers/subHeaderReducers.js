import {
    SUBHEADER_CREATE_FAIL,
    SUBHEADER_CREATE_REQUEST,
    SUBHEADER_CREATE_RESET,
    SUBHEADER_CREATE_SUCCESS,
    SUBHEADER_DELETE_FAIL,
    SUBHEADER_DELETE_REQUEST,
    SUBHEADER_DELETE_SUCCESS,
    SUBHEADER_DETAILS_FAIL,
    SUBHEADER_DETAILS_REQUEST,
    SUBHEADER_DETAILS_SUCCESS,
    SUBHEADER_DETAILS_RESET,
    SUBHEADER_LIST_FAIL,
    SUBHEADER_LIST_REQUEST,
    SUBHEADER_LIST_SUCCESS,
    SUBHEADER_UPDATE_FAIL,
    SUBHEADER_UPDATE_REQUEST,
    SUBHEADER_UPDATE_RESET,
    SUBHEADER_UPDATE_SUCCESS,
} from "../constants/subHeaderConstants";

export const subHeaderListReducer = (state = { subHeaders: [] }, action) => {
    switch (action.type) {
        case SUBHEADER_LIST_REQUEST:
            return { loading: true, subHeaders: [] };
        case SUBHEADER_LIST_SUCCESS:
            return {
                loading: false,
                subHeaders: action.payload
            };
        case SUBHEADER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const subHeaderDetailsReducer = (state = { subHeader: {} }, action) => {
    switch (action.type) {
        case SUBHEADER_DETAILS_REQUEST:
            return { loading: true, ...state };
        case SUBHEADER_DETAILS_SUCCESS:
            return { loading: false, subHeader: action.payload };
        case SUBHEADER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case SUBHEADER_DETAILS_RESET:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const subHeaderDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBHEADER_DELETE_REQUEST:
            return { loading: true };
        case SUBHEADER_DELETE_SUCCESS:
            return { loading: false, success: true };
        case SUBHEADER_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const subHeaderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBHEADER_CREATE_REQUEST:
            return { loading: true };
        case SUBHEADER_CREATE_SUCCESS:
            return { loading: false, success: true, subHeader: action.payload };
        case SUBHEADER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case SUBHEADER_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const subHeaderUpdateReducer = (state = { subHeader: {} }, action) => {
    switch (action.type) {
        case SUBHEADER_UPDATE_REQUEST:
            return { loading: true };
        case SUBHEADER_UPDATE_SUCCESS:
            return { loading: false, success: true, subHeader: action.payload };
        case SUBHEADER_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case SUBHEADER_UPDATE_RESET:
            return { subHeader: {} };
        default:
            return state;
    }
};