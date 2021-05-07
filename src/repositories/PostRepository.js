import Axios from 'axios';

export default {
    getPosts: async () => {
        try {
            let response = await Axios.get(
                'http://127.0.0.1:8000/posts'
            );
            return response.data.data;
        } catch (error) {
            throw error
        }
    }

}