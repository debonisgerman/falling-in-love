import axios from "axios";
import {
    MATERIAL_CREATE_FAIL,
    MATERIAL_CREATE_REQUEST,
    MATERIAL_CREATE_SUCCESS,
    MATERIAL_DELETE_FAIL,
    MATERIAL_DELETE_REQUEST,
    MATERIAL_DELETE_SUCCESS,
    MATERIAL_DETAILS_FAIL,
    MATERIAL_DETAILS_REQUEST,
    MATERIAL_DETAILS_SUCCESS,
    MATERIAL_LIST_FAIL,
    MATERIAL_LIST_REQUEST,
    MATERIAL_LIST_SUCCESS,
    MATERIAL_UPDATE_FAIL,
    MATERIAL_UPDATE_REQUEST,
    MATERIAL_UPDATE_SUCCESS,
} from '../constants/materialConstants';

export const listMaterials = () => async (dispatch) => {
    try {
        console.log('dispatching materials');
        dispatch({ type: MATERIAL_LIST_REQUEST });

        const { data } = await axios.get(`/api/materials`);

        dispatch({ type: MATERIAL_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: MATERIAL_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listMaterialsDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: MATERIAL_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/materials/${id}`);

        dispatch({ type: MATERIAL_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: MATERIAL_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const deleteMaterial = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MATERIAL_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/materials/${id}`, config);

        dispatch({
            type: MATERIAL_DELETE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: MATERIAL_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createMaterial = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: MATERIAL_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(`/api/materials`, {}, config);

        dispatch({
            type: MATERIAL_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: MATERIAL_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateMaterial = (material) => async (dispatch, getState) => {
    try {
      dispatch({
        type: MATERIAL_UPDATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(
        `/api/materials/${material._id}`,
        material,
        config
      );
  
      dispatch({
        type: MATERIAL_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: MATERIAL_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };