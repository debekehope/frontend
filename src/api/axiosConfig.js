import axios from 'axios';

export default axios.create({
    baseURL:'http://a93dd5353e82f4f7b956108f89f71f22-553638324.us-east-1.elb.amazonaws.com/:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
