import {
  FETCH_QUOTE_FAIL,
  FETCH_QUOTE_LOADING,
  FETCH_QUOTE_SUCCESS,
} from "../actions/quotesActions";

const initialState = {
  quote: "I am running for President of the United States",
  isFetching: false,
  error: "",
};



export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        quote: action.payload,
        isFetching: false,
      };
    case FETCH_QUOTE_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
