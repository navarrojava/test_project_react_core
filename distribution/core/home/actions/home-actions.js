'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllPosts = exports.decrementAsync = exports.decrement = exports.incrementAsync = exports.increment = undefined;

var _homeClient = require('../client/home-client');

var _homeClient2 = _interopRequireDefault(_homeClient);

var _homeActionTypes = require('./home-action-types');

var ACTION_TYPES = _interopRequireWildcard(_homeActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by NavarroFerreira on 6/20/2017.
 */

var increment = exports.increment = function increment() {
  return function (dispatch) {
    dispatch({
      type: ACTION_TYPES.INCREMENT_REQUESTED
    });

    dispatch({
      type: ACTION_TYPES.INCREMENT
    });
  };
};

var incrementAsync = exports.incrementAsync = function incrementAsync() {
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

var decrement = exports.decrement = function decrement() {
  return function (dispatch) {
    dispatch({
      type: ACTION_TYPES.DECREMENT_REQUESTED
    });

    dispatch({
      type: ACTION_TYPES.DECREMENT
    });
  };
};

var decrementAsync = exports.decrementAsync = function decrementAsync() {
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

var getAllPosts = exports.getAllPosts = function getAllPosts() {
  return function (dispatch) {
    _homeClient2.default.getAllPostsClient().then(function (response) {
      dispatch({
        type: ACTION_TYPES.GET_ALL_POSTS_SUCCESS,
        payload: { posts: response }
      });
    });
  };
};