// src/services/userService.js

import api from './api';


const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('Authentication token is missing');
    }
    return {
        Authorization: `Bearer ${token}`,
    };
};

export const getUsers = async () => {
    try {
        const response = await api.get('/users', {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch users');
    }
};

export const addUser = async (userData) => {
    try {
        const response = await api.post('/users', userData, {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to add user');
    }
};

export const updateUser = async (id, userData) => {
    try {
        const response = await api.put(`/users/${id}`, userData, {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to update user');
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await api.delete(`/users/${id}`, {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to delete user');
    }
};
