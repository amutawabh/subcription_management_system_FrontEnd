import api from './api';

export const getUsers = async () => {
    const token = localStorage.getItem('token');
    const response = await api.get('/users', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const addUser = async (userData) => {
    const token = localStorage.getItem('token');
    const response = await api.post('/users', userData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const updateUser = async (id, userData) => {
    const token = localStorage.getItem('token');
    const response = await api.put(`/users/${id}`, userData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
