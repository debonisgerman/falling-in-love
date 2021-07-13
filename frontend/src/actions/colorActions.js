import axios from "axios";
import {
    COLOR_CREATE_FAIL,
    COLOR_CREATE_REQUEST,
    COLOR_CREATE_SUCCESS,
    COLOR_DELETE_FAIL,
    COLOR_DELETE_REQUEST,
    COLOR_DELETE_SUCCESS,
    COLOR_DETAILS_FAIL,
    COLOR_DETAILS_REQUEST,
    COLOR_DETAILS_SUCCESS,
    COLOR_LIST_FAIL,
    COLOR_LIST_REQUEST,
    COLOR_LIST_SUCCESS,
    COLOR_UPDATE_FAIL,
    COLOR_UPDATE_REQUEST,
    COLOR_UPDATE_SUCCESS,
} from '../constants/colorConstants';

export const listColors = () => async (dispatch) => {
    try {
        console.log('dispatching colors');
        dispatch({ type: COLOR_LIST_REQUEST });

        const { data } = await axios.get(`/api/colors`);

        dispatch({ type: COLOR_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: COLOR_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listColorsDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: COLOR_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/colors/${id}`);

        dispatch({ type: COLOR_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: COLOR_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const deleteColor = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: COLOR_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/colors/${id}`, config);

        dispatch({
            type: COLOR_DELETE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: COLOR_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createColor = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: COLOR_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(`/api/colors`, {}, config);

        dispatch({
            type: COLOR_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: COLOR_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateColor = (color) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COLOR_UPDATE_REQUEST,
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
        `/api/colors/${color._id}`,
        color,
        config
      );
  
      dispatch({
        type: COLOR_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: COLOR_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };