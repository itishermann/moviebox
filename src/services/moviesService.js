import axios from 'axios';

const MOVIE_SEARCH_URL = (searchText) => `https://api.tvmaze.com/search/shows?q=${searchText}`;

const messageService = {
    /**
     * Search a movie
     * @param {string} searchText search text
     */
    search(searchText) {
        return axios.get(MOVIE_SEARCH_URL(searchText));
    },
}



export { messageService };