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
