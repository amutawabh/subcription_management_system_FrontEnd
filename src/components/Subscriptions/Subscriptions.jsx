// src/services/subscriptionService.js

import api from './api';

export const getSubscriptions = async () => {
    const token = localStorage.getItem('token'); 
    const response = await api.get('/subscriptions', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data; 
};

export const addSubscription = async (subscriptionData) => {
    const token = localStorage.getItem('token');
    const response = await api.post('/subscriptions', subscriptionData, {
        headers: {
            Authorization: `Bearer ${token}`, 
        },
    });
    return response.data;
};


export const updateSubscription = async (id, subscriptionData) => {
    const token = localStorage.getItem('token'); 
    const response = await api.put(`/subscriptions/${id}`, subscriptionData, {
        headers: {
            Authorization: `Bearer ${token}`, 
        },
    });
    return response.data; 
};


export const deleteSubscription = async (id) => {
    const token = localStorage.getItem('token'); 
    const response = await api.delete(`/subscriptions/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`, 
        },
    });
    return response.data; 
};
