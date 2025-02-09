import axios from 'axios';

export const updateData = async () => {
  try {
    const response = await axios.get('/data.min.json'); // Путь к файлу в папке public
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
