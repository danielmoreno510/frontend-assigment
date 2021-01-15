import produce from "immer";

import {
  FETCH_ARTICLES,
  PUT_ARTICLES,
  PUT_IS_FETCHING
} from "../actions/types";

export const initialState = {
  articleList: [],
  isFetching: true
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_ARTICLES:
        draft.isFetching = false
        break;
      case PUT_ARTICLES:
        draft.articleList = action.articleList
        draft.isFetching = true
        break;
      case PUT_IS_FETCHING:
        draft.isFetching = action.isFetching
        break;
      default:
        break;
    }
  });
