import axios from 'axios';
import { cookies } from 'next/headers';


// Create an instance of axios
const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/v1/user",
});

// Add a request interceptor to set the authentication header
axiosInstance.interceptors.request.use(

    (config) => {

        const cookieStore = cookies();
        const tokenData = cookieStore.get("token");
        const token = tokenData?.value;

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error.response);
    }
);

export default axiosInstance;
