/**
 * Created by NavarroFerreira on 6/20/2017.
 */

import homeClient from '../client/home-client';
import * as ACTION_TYPES from './home-action-types';

export var increment = function increment() {
  return function (dispatch) {
    dispatch({
      type: ACTION_TYPES.INCREMENT_REQUESTED
    });

    dispatch({
      type: ACTION_TYPES.INCREMENT
    });
  };
};

export var incrementAsync = function incrementAsync() {
  return function (dispatch) {
    dispatch({
      type: ACTION_TYPES.INCREMENT_REQUESTED
    });

    return setTimeout(function () {
      dispatch({
        type: ACTION_TYPES.INCREMENT
      });
    }, 3000);
  };
};

export var decrement = function decrement() {
  return function (dispatch) {
    dispatch({
      type: ACTION_TYPES.DECREMENT_REQUESTED
    });

    dispatch({
      type: ACTION_TYPES.DECREMENT
    });
  };
};

export var decrementAsync = function decrementAsync() {
  return function (dispatch) {
    dispatch({
      type: ACTION_TYPES.DECREMENT_REQUESTED
    });

    return setTimeout(function () {
      dispatch({
        type: ACTION_TYPES.DECREMENT
      });
    }, 3000);
  };
};

export var getAllPosts = function getAllPosts() {
  return function (dispatch) {
    homeClient.getAllPostsClient().then(function (response) {
      dispatch({
        type: ACTION_TYPES.GET_ALL_POSTS_SUCCESS,
        payload: { posts: response }
      });
    });
  };
};