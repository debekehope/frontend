import axios from 'axios';

export default axios.create({
    baseURL:'http://54.234.137.78:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
