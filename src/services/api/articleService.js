import http from '../http'

export const fetchArticles = async () => {
    const {data} = await http.get(`/articles`);
    return data
}