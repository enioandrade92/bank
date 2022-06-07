import api from '../api';

export const userSignIn = async (dataLogin) => api.post('/signin', dataLogin)

export const userSignUp = async (dataCreate) => api.post('/signup', dataCreate);


// export const me = async () => api.get('/me');
