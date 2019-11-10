import { STATUS } from "../constants";

const initialState = {
  moviesFetchingStatus: "",
  moviesFetchingError: {}
};

export default (state = initialState, action) => {
  const actionHandlers = {
    SEARCH_MOVIES_REQUEST: {
      moviesFetchingStatus: STATUS.PENDING,
      moviesFetchingError: ""
    },
    SEARCH_MOVIES_SUCCESS: {
      moviesFetchingStatus: STATUS.SUCCESS,
      moviesFetchingError: ""
    },
    SEARCH_MOVIES_FAILURE: {
      moviesFetchingStatus: STATUS.ERROR,
      moviesFetchingError: action.error
    }
  };

  state = Object.assign({}, state, actionHandlers[action.type]);

  return state;
};
