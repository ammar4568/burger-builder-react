import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f99fe.firebaseio.com/'
})

export default instance;