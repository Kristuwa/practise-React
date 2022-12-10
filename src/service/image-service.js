import axios from 'axios';
const PER_PAGE = 15;
const API_KEY = '563492ad6f91700001000001639cabac73c74accb94b7bf7858095a0';
axios.defaults.baseURL = 'https://api.pexels.com/v1';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: PER_PAGE,
};

export const getImages = async (query, page = 1) => {
  const params = {
    query,
    page,
  };
  try {
    const { data } = await axios.get('/search', { params });
    const { photos, total_results } = data;
    const totalPages = Math.ceil(total_results / PER_PAGE);
    return { photos, totalPages };
  } catch (error) {
    throw new Error(error);
  }
};
