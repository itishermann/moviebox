import { messageService } from "../services";
import {
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIES_FAILURE
} from "../constants";

const searchRequest = () => ({
    type: SEARCH_MOVIES_REQUEST
});


const searchSuccess = (movies, searchText) => ({
    type: SEARCH_MOVIES_SUCCESS,
    payload: {
        movies,
        searchText
    }
});


const searchFailure = error => ({
    type: SEARCH_MOVIES_FAILURE,
    error
});

function searchMovie(searchText) {
    return dispatch => {
        dispatch(searchRequest());

        messageService
            .search(searchText)
            .then(response => {
                const movies = response.data.map(movie => ({
                    genres: movie.show.genres,
                    network: movie.show.network,
                    language: movie.show.language,
                    type: movie.show.type,
                    id: movie.show.id,
                    name: movie.show.name,
                    rating: movie.show.rating.average,
                    date: movie.show.updated,
                    summary: movie.show.summary,
                    url: movie.show.officialSite,
                    url2: movie.show.url,
                    ...(Boolean(movie.show.image) && { image: movie.show.image.original })
                }));
                dispatch(searchSuccess(movies, searchText));
            })
            .catch(error => {
                const errorMessage = error.response ? error.response.data : error;

                dispatch(searchFailure(errorMessage));
            });
    };
}


export { searchMovie };