var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by NavarroFerreira on 6/20/2017.
 */
import * as ACTION_TYPES from '../actions/home-action-types';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  posts: []
};

export default ((state = initialState, action) => {
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
});