import api from './authService';

export const getSubscriptions = async () => {
  const response = await api.get('/subscriptions');
  return response.data;
};

export const addSubscription = async (subscriptionData) => {
  const response = await api.post('/subscriptions', subscriptionData);
  return response.data;
};

export const updateSubscription = async (id, updatedData) => {
  const response = await api.put(`/subscriptions/${id}`, updatedData);
  return response.data;
};

export const deleteSubscription = async (id) => {
  const response = await api.delete(`/subscriptions/${id}`);
  return response.data;
};
