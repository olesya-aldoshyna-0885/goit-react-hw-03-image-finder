import axios from 'axios';

const API_KEY = '34919235-4eb9cfcad5af8f565adf9ce4e';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
};

export const getImages = async (query, page) => {
  const { data } = await axios.get('', {
    params: {
      q: query,
      page: page,
      per_page: 12,
    },
  });
  return data;
};