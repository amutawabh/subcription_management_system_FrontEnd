// src/services/subscriptionService.js

import api from './api';

export const getSubscriptions = async () => {
    const token = localStorage.getItem('token'); // استرجاع التوكن من التخزين المحلي
    const response = await api.get('/subscriptions', {
        headers: {
            Authorization: `Bearer ${token}`, // إضافة التوكن إلى الهيدر
        },
    });
    return response.data; // إرجاع البيانات المستلمة
};

export const addSubscription = async (subscriptionData) => {
    const token = localStorage.getItem('token'); // استرجاع التوكن من التخزين المحلي
    const response = await api.post('/subscriptions', subscriptionData, {
        headers: {
            Authorization: `Bearer ${token}`, // إضافة التوكن إلى الهيدر
        },
    });
    return response.data; // إرجاع البيانات المستلمة
};

// دالة تحديث الاشتراك
export const updateSubscription = async (id, subscriptionData) => {
    const token = localStorage.getItem('token'); // استرجاع التوكن من التخزين المحلي
    const response = await api.put(`/subscriptions/${id}`, subscriptionData, {
        headers: {
            Authorization: `Bearer ${token}`, // إضافة التوكن إلى الهيدر
        },
    });
    return response.data; // إرجاع البيانات المستلمة
};

// دالة حذف الاشتراك
export const deleteSubscription = async (id) => {
    const token = localStorage.getItem('token'); // استرجاع التوكن من التخزين المحلي
    const response = await api.delete(`/subscriptions/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`, // إضافة التوكن إلى الهيدر
        },
    });
    return response.data; // إرجاع البيانات المستلمة
};

// دالة تحديث الاشتراك
export const updateSubscription = async (id, subscriptionData) => {
    const token = localStorage.getItem('token'); // استرجاع التوكن من التخزين المحلي
    const response = await api.put(`/subscriptions/${id}`, subscriptionData, {
        headers: {
            Authorization: `Bearer ${token}`, // إضافة التوكن إلى الهيدر
        },
    });
    return response.data; // إرجاع البيانات المستلمة
};

// دالة حذف الاشتراك
export const deleteSubscription = async (id) => {
    const token = localStorage.getItem('token'); // استرجاع التوكن من التخزين المحلي
    const response = await api.delete(`/subscriptions/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`, // إضافة التوكن إلى الهيدر
        },
    });
    return response.data; // إرجاع البيانات المستلمة
};