import axios from "axios";
import {
    CATEGORY_CREATE_FAIL,
    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_DELETE_FAIL,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DETAILS_FAIL,
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_UPDATE_FAIL,
    CATEGORY_UPDATE_REQUEST,
    CATEGORY_UPDATE_SUCCESS,
} from '../constants/categoryConstants';

export const listCategories = () => async (dispatch) => {
    try {
        console.log('dispatching categories');
        dispatch({ type: CATEGORY_LIST_REQUEST });

        const { data } = await axios.get(`/api/categories`);

        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listCategoriesDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/categories/${id}`);

        dispatch({ type: CATEGORY_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: CATEGORY_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const deleteCategory = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORY_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/categories/${id}`, config);

        dispatch({
            type: CATEGORY_DELETE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: CATEGORY_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createCategory = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORY_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(`/api/categories`, {}, config);

        dispatch({
            type: CATEGORY_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CATEGORY_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateCategory = (category) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CATEGORY_UPDATE_REQUEST,
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
        `/api/categories/${category._id}`,
        category,
        config
      );
  
      dispatch({
        type: CATEGORY_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CATEGORY_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };