import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '82a3abc4f5fb6e4f5c2571b470ddbbf7',
        language: 'pt-BR',
        page: 1
    }
})


//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export default api