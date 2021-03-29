import axios from 'axios'

const api = axios.create({
    baseURL: 'http://tecnewdec.com.br/jorge',
    // baseURL: process.env.URL_BACKEND,
    //'http://tecnewdec.com.br/jorge'
});

export default api;