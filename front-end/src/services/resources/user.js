import api from '../api';

export const userSignIn = async (dataLogin) => {
  try {
    const { data } = await api.post('/user/signin', dataLogin);
    return data;

  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export const userSignUp = async (dataCreate) => {
  try {
    const { data } = await api.post('/user/signup', dataCreate);
    return data;
    
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export const userMe = async () => {
  try {
    const { data } = await api.get('/user/me');
    return data;

  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

