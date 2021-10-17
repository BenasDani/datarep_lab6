import React from 'react';
import { MovieItem } from './movieItem';

export class Movies extends React.Component {
//map the movies
    render() {
        return this.props.movies.map((movie) => {
            return <MovieItem>movie={movie}</MovieItem>
        })
    }

}