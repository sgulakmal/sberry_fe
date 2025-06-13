import axios from 'axios';
import { getSession } from 'next-auth/react';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Request interceptor
api.interceptors.request.use(
    async config => {
        // Attach token
        const session = await getSession();
        config.headers.Authorization = `Bearer ${session?.user?.access_token}`;
        return config;
    },
    error => Promise.reject(error)
);

// Response interceptor (for global error handling)
api.interceptors.response.use(
    response => response.data,
    error => {
        if (error.response) {
            const status = error.response.status;

            if (status === 401) {
                console.error('Unauthorized - maybe redirect to login');
            } else if (status === 500) {
                console.error('Server error');
            } else {
                console.error('API error:', error.response.data.message || 'Unknown error');
            }
        } else if (error.request) {
            console.error('No response from server');
        } else {
            console.error('Request setup error:', error.message);
        }

        return Promise.reject(error);
    }
);

export default api;
