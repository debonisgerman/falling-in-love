import axios from "axios";
import {
    SIZE_CREATE_FAIL,
    SIZE_CREATE_REQUEST,
    SIZE_CREATE_SUCCESS,
    SIZE_DELETE_FAIL,
    SIZE_DELETE_REQUEST,
    SIZE_DELETE_SUCCESS,
    SIZE_DETAILS_FAIL,
    SIZE_DETAILS_REQUEST,
    SIZE_DETAILS_SUCCESS,
    SIZE_LIST_FAIL,
    SIZE_LIST_REQUEST,
    SIZE_LIST_SUCCESS,
    SIZE_UPDATE_FAIL,
    SIZE_UPDATE_REQUEST,
    SIZE_UPDATE_SUCCESS,
} from '../constants/sizeConstants';

export const listSizes = () => async (dispatch) => {
    try {
        console.log('dispatching sizes');
        dispatch({ type: SIZE_LIST_REQUEST });

        const { data } = await axios.get(`/api/sizes`);

        dispatch({ type: SIZE_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: SIZE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listSizesDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: SIZE_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/sizes/${id}`);

        dispatch({ type: SIZE_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: SIZE_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const deleteSize = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SIZE_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/sizes/${id}`, config);

        dispatch({
            type: SIZE_DELETE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: SIZE_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createSize = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SIZE_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(`/api/sizes`, {}, config);

        dispatch({
            type: SIZE_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SIZE_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateSize = (size) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SIZE_UPDATE_REQUEST,
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
        `/api/sizes/${size._id}`,
        size,
        config
      );
  
      dispatch({
        type: SIZE_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SIZE_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };