import axios from 'axios'
const baseUrl = 'https://scorcuera.github.io/women-programmers/api.json';

export const imageService = {
    getProgrammers: async() => {
        let result = await axios.get(baseUrl);
        return result.data.programmers;
    }
}