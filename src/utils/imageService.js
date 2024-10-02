import axios from 'axios';

export const fetchAnimalImage = async (animalName, size = 200) => {
  const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: animalName,
        client_id: apiKey,
        per_page: 1,
      },
    });

    // Sizing parameters based on the size argument
    const imageUrl = response.data.results[0]?.urls?.raw + `&w=${size}&h=${size}&fit=crop`;

    return imageUrl || `https://via.placeholder.com/${size}`;
  } catch (error) {
    console.error('Error fetching image:', error);
    return `https://via.placeholder.com/${size}`;
  }
};