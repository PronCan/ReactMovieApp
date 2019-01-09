import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return(
            <img src="https://t1.daumcdn.net/cfile/tistory/9974FE3A5AFE995F0A" />
        );
    }
}

export default Movie;