import Axios from 'axios'

const axios = Axios.create({
    // baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
     baseURL: 'http://localhost:8080',

    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
