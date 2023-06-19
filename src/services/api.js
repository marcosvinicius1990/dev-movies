import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '49946e6f8df4b6b56b9e8381ee98aab6',
        language: 'pt-BR',
        page: 1
    }
})

export default api