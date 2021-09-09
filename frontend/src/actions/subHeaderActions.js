import axios from "axios";
import {
    SUBHEADER_CREATE_FAIL,
    SUBHEADER_CREATE_REQUEST,
    SUBHEADER_CREATE_SUCCESS,
    SUBHEADER_DELETE_FAIL,
    SUBHEADER_DELETE_REQUEST,
    SUBHEADER_DELETE_SUCCESS,
    SUBHEADER_DETAILS_FAIL,
    SUBHEADER_DETAILS_REQUEST,
    SUBHEADER_DETAILS_SUCCESS,
    SUBHEADER_LIST_FAIL,
    SUBHEADER_LIST_REQUEST,
    SUBHEADER_LIST_SUCCESS,
    SUBHEADER_UPDATE_FAIL,
    SUBHEADER_UPDATE_REQUEST,
    SUBHEADER_UPDATE_SUCCESS,
} from '../constants/subHeaderConstants';

export const listSubHeaders = () => async (dispatch) => {
    try {
        console.log('dispatching subheader');
        dispatch({ type: SUBHEADER_LIST_REQUEST });

        const { data } = await axios.get(`/api/subheaders`);

        dispatch({ type: SUBHEADER_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: SUBHEADER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listSubHeadersDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: SUBHEADER_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/subheaders/${id}`);

        dispatch({ type: SUBHEADER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: SUBHEADER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const deleteSubHeader = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUBHEADER_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/subheaders/${id}`, config);

        dispatch({
            type: SUBHEADER_DELETE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: SUBHEADER_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createSubHeader = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUBHEADER_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(`/api/subheaders`, {}, config);

        dispatch({
            type: SUBHEADER_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SUBHEADER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateSubHeader = (color) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SUBHEADER_UPDATE_REQUEST,
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
        `/api/subheaders/${color._id}`,
        color,
        config
      );
  
      dispatch({
        type: SUBHEADER_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SUBHEADER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };