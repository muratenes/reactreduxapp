import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from "./MovieCard";
import {Grid} from "semantic-ui-react";
import ClipLoader from "react-spinners/ClipLoader";

const MoviesList = ({movies}) => {

    const emptyMessage = (
        <p>there are no movies</p>
    )

    const moviesList = (
        <div>
            <ClipLoader
                size={150}
                color={"#123abc"}
                loading={movies.fetching}
            />
            {
                movies.error.response
                    ?<p>Hata var</p>
                    :
                    <Grid stackable columns={3}>
                        {movies.movies.map(movie => <MovieCard id={movie.id} movie={movie}/>)}
                    </Grid>
            }
        </div>

    )

    return (
        <div>
            {movies.length === 0  ? emptyMessage : moviesList}
        </div>
    );
}

MoviesList.propTypes = {
    movies: PropTypes.shape({
        movies : PropTypes.array.isRequired
    }).isRequired
}

export default MoviesList;
