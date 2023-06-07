import api from '../services/catApi';

export const fetchCats = async (limit = 10) => {
  const response = await api.get(`/images/search?limit=${limit}`);
  return response.data;
};

export const fetchCatById = async (id) => {
  const response = await api.get(`/images/${id}`);
  return response.data;
};

export const fetchBreedDetails = async (breedId) => {
  const response = await api.get(`/breeds/search?q=${breedId}`);
  return response.data[0];
};
