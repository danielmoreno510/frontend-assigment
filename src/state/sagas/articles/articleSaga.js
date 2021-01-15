import { takeLatest, put, call } from "redux-saga/effects";
import { putArticles, putIsFetching } from "../../actions";
import { FETCH_ARTICLES } from "../../actions/types";
import * as articleServices from "../../../services/api/articleService";
import { handleHttpError } from "../../../services/httpUtils";

const { fetchArticles } = articleServices;

export function* fetchArticleList() {
  const context = "fetchArticleList saga";
  try {
    // Waits for the call to finish and puts the result in contacts.
    const response = yield call(fetchArticles);
    // Dispatches an action to add the contacts to the state tree.
    yield put(putArticles(response));
  } catch (error) {
    handleHttpError(error, context, error.description);
  } finally {
    yield put(putIsFetching(false));
  }
}
/** * Watcher saga that waits for an action and forks the fetch saga. */ export default function* watchFetchContactList() {
  yield takeLatest(FETCH_ARTICLES, fetchArticleList);
}
