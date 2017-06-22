'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by NavarroFerreira on 6/20/2017.
                                                                                                                                                                                                                                                                   */


var _homeActionTypes = require('../actions/home-action-types');

var ACTION_TYPES = _interopRequireWildcard(_homeActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  posts: []
};

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case ACTION_TYPES.INCREMENT_REQUESTED:
      return _extends({}, state, {
        isIncrementing: true
      });

    case ACTION_TYPES.INCREMENT:
      return _extends({}, state, {
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      });

    case ACTION_TYPES.DECREMENT_REQUESTED:
      return _extends({}, state, {
        isDecrementing: true
      });

    case ACTION_TYPES.DECREMENT:
      return _extends({}, state, {
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      });

    case ACTION_TYPES.GET_ALL_POSTS_SUCCESS:

      return _extends({}, state, { posts: action.payload.posts
      });

    default:
      return state;
  }
};