import axios from 'axios'

const api = axios.create({ baseURL: 'https://newsapi.org/v2/' })
const apiKey = '37004776dd5442138cb567f2643ff73c'

export const getNews = async () => {
    const { data } = await api.get(`everything?q=bitcoin&apiKey=${apiKey}`)
    return data
}