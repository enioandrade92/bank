import api from '../api';

export const request = async (value) => api.post('/pix/request', {value});

export const pay = async (key) => api.post(`/pix/pay/${key}`);

export const transactions = async () => api.get('/pix/transactions');
