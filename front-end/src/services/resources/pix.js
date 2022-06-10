import api from '../api';

export const request = async (value) => {
  try {
    const { data } = await api.post('/pix/request', {value});
    return data;
    
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export const pay = async (key) => {
  try {
    const { data } = await api.post(`/pix/pay/${key}`);
    return data;
    
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export const transactions = async () => {
  try {
    const { data } = await api.get('/pix/transactions');
    return data;
    
  } catch (error) {
    console.log(error);
    return [];
  }
};
