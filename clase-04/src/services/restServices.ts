import axios from 'axios';

export const getBookById = async (id: number) => {
  try {
    const response = await axios.get(`/book/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching book:', error);
    return null;
  }
};