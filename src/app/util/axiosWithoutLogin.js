import axios from 'axios';
import Cookies from 'js-cookie';
// import { cookies } from 'next/headers';


// Create an instance of Axios
const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/v1/user", // Use your API base URL
});

// Request interceptor to add the auth token if it exists
axiosInstance.interceptors.request.use(
    (config) => {
        

        // const cookieStore = cookies();
        // const token = cookieStore.get('token');
        // const token = localStorage.getItem("token");

        // if (token) {
        //     config.headers['Authorization'] = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle responses
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
