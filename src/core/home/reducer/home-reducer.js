/**
 * Created by NavarroFerreira on 6/20/2017.
 */
import * as ACTION_TYPES from '../actions/home-action-types';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  posts: [],
};

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true,
      };

    case ACTION_TYPES.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing,
      };

    case ACTION_TYPES.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true,
      };

    case ACTION_TYPES.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing,
      };

    case ACTION_TYPES.GET_ALL_POSTS_SUCCESS:

      return {
        ...state, posts: action.payload.posts,
      };

    default:
      return state;
  }
};
