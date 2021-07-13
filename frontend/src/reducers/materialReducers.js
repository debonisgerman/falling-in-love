import {
    MATERIAL_CREATE_FAIL,
    MATERIAL_CREATE_REQUEST,
    MATERIAL_CREATE_RESET,
    MATERIAL_CREATE_SUCCESS,
    MATERIAL_DELETE_FAIL,
    MATERIAL_DELETE_REQUEST,
    MATERIAL_DELETE_SUCCESS,
    MATERIAL_DETAILS_FAIL,
    MATERIAL_DETAILS_REQUEST,
    MATERIAL_DETAILS_SUCCESS,
    MATERIAL_DETAILS_RESET,
    MATERIAL_LIST_FAIL,
    MATERIAL_LIST_REQUEST,
    MATERIAL_LIST_SUCCESS,
    MATERIAL_UPDATE_FAIL,
    MATERIAL_UPDATE_REQUEST,
    MATERIAL_UPDATE_RESET,
    MATERIAL_UPDATE_SUCCESS,
} from "../constants/materialConstants";

export const materialListReducer = (state = { materials: [] }, action) => {
    switch (action.type) {
        case MATERIAL_LIST_REQUEST:
            return { loading: true, materials: [] };
        case MATERIAL_LIST_SUCCESS:
            return {
                loading: false,
                materials: action.payload
            };
        case MATERIAL_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const materialDetailsReducer = (state = { material: {} }, action) => {
    switch (action.type) {
        case MATERIAL_DETAILS_REQUEST:
            return { loading: true, ...state };
        case MATERIAL_DETAILS_SUCCESS:
            return { loading: false, material: action.payload };
        case MATERIAL_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case MATERIAL_DETAILS_RESET:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const materialDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case MATERIAL_DELETE_REQUEST:
            return { loading: true };
        case MATERIAL_DELETE_SUCCESS:
            return { loading: false, success: true };
        case MATERIAL_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const materialCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case MATERIAL_CREATE_REQUEST:
            return { loading: true };
        case MATERIAL_CREATE_SUCCESS:
            return { loading: false, success: true, material: action.payload };
        case MATERIAL_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case MATERIAL_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const materialUpdateReducer = (state = { material: {} }, action) => {
    switch (action.type) {
        case MATERIAL_UPDATE_REQUEST:
            return { loading: true };
        case MATERIAL_UPDATE_SUCCESS:
            return { loading: false, success: true, material: action.payload };
        case MATERIAL_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case MATERIAL_UPDATE_RESET:
            return { material: {} };
        default:
            return state;
    }
};