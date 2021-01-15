import {all} from 'redux-saga/effects'

import articleSagas from './articleSaga'

export default function * rootSaga () {
    yield all([
        articleSagas()
    ])
}