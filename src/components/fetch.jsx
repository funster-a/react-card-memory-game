import axios from 'axios'

const apiKey = 'aCcRhzCpT94yVJSbrsho5DEAXp3fLARY2nQu7E1tdU3rxKuTwtpaUz8V    ';  
const query = 'nature';  // Поисковый запрос, например, "nature"
const url = 'https://api.pexels.com/v1/search';

const fetch = async () => { 
    try {
      const randomPage = Math.floor(Math.random() * 100) + 1;


      const response = await axios.get(url, {
        params: {
          query: query,
          per_page: 14,  // Количество фотографий, которые нужно получить
          page: randomPage
        },
        headers: {
          'Authorization': apiKey
        }
      });
  
      const photos = response.data.photos
      if (Array.isArray(photos)) {
        const photosDetailsArray = photos.map(photo => {
          return {
            id: photo.id,
            url: photo.src.small,
            alt: photo.alt
          };
        });
  
  
        return photosDetailsArray;
      } else {
        console.error('Unexpected data format:', photos);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

export default fetch

