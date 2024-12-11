import axios from 'axios';

export const fetchLogs = async () => {
  try {
    const token = localStorage.getItem('token'); 
    const response = await axios.get('http://localhost:3000/api/logs', {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching logs:', error.message);
    throw error;
  }
};
