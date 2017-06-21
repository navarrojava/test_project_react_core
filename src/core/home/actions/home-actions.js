/**
 * Created by NavarroFerreira on 6/20/2017.
 */

import homeClient from '../client/home-client';
import * as ACTION_TYPES from "./home-action-types";



export const increment = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.INCREMENT_REQUESTED,
  });

  dispatch({
    type: ACTION_TYPES.INCREMENT,
  });
};

export const incrementAsync = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.INCREMENT_REQUESTED,
  });

  return setTimeout(() => {
    dispatch({
      type: ACTION_TYPES.INCREMENT,
    });
  }, 3000);
};

export const decrement = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.DECREMENT_REQUESTED,
  });

  dispatch({
    type: ACTION_TYPES.DECREMENT,
  });
};

export const decrementAsync = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.DECREMENT_REQUESTED,
  });

  return setTimeout(() => {
    dispatch({
      type: ACTION_TYPES.DECREMENT,
    });
  }, 3000);
};

export const getAllPosts = () => (dispatch) => {
  homeClient.getAllPostsClient().then((response) => {
    dispatch({
      type: ACTION_TYPES.GET_ALL_POSTS_SUCCESS,
      payload: { posts : response } ,
    });
  });
};
