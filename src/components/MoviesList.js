import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = ({movies}) => {

    const emptyMessage = (
        <p>there are no movies</p>
    )

    const moviesList = (
        <div>
            Movies list was here
        </div>
    )

    return (
        <div>
            {movies.length > 0  ? moviesList : emptyMessage}
        </div>
    );
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MoviesList;
