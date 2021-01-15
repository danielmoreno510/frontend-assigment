import {FETCH_ARTICLES, PUT_ARTICLES, PUT_IS_FETCHING} from './types'

export const fetchArticles = () => ({
    type: FETCH_ARTICLES
})

export const putArticles = articles => ({
    type: PUT_ARTICLES,
    articleList: articles
})

export const putIsFetching = isFetching => ({
    type: PUT_IS_FETCHING,
    isFetching
})