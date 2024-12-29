import api from './base';

export const resources = {
  getAll: async () => {
    const response = await api.get('/resources');
    return response.data;
  },
};
