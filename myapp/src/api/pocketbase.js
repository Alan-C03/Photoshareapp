import axios from 'axios';

const API_URL = 'http://localhost:8090/api';

export default {

    // Get list of photos
    getPhotos: async () => {
        const response = await axios.get(`${API_URL}/collections/photos`);
        return response.data;
    },

    // Create a new photo
    createPhoto: async (photo) => {
        const response = await axios.post(`${API_URL}/collections/photos`, photo);
        return response.data;
    },

}