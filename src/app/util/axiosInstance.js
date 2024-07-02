import axios from 'axios';
import Cookies from 'js-cookie';
import { cookies } from 'next/headers';


// Create an instance of axios
const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/v1/user",
});

// Add a request interceptor to set the authentication header
axiosInstance.interceptors.request.use(
    (config) => {
        
        const cookieStore = cookies();
        const token = cookieStore.get('token');        
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
