import React from 'react';

// Axios
import api from '../api';

// Router
import { Link } from 'react-router-dom';

// My components
import Footer from '../components/Footer';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { listMovies } from '../actions';

// React-icons
import {
    AiOutlineArrowLeft, AiOutlineArrowRight
} from 'react-icons/ai';

function Movies() {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    return (
        <div className="main" >
            <div>
                <Link to="/todo" >
                    <button className="btn-primary btn-top-prev">
                        <AiOutlineArrowLeft /> Prev
                    </button>
                </Link>

                <Link to="/">
                    <button className="btn-primary btn-top-next" >
                        Next < AiOutlineArrowRight />
                    </button>
                </Link>
            </div>

            <div className="title">
                <h1>Movies List</h1>
            </div>
            <div>
                <input id="inptSearchMovie" />
                <button className="btn-primary"
                    onClick={() => api.get(document.querySelector('#inptSearchMovie').value)
                                    .then(res => dispatch(listMovies(res.data)))}>
                    Search movies
                        </button>
                {
                    movies.map(movie => {
                        return (
                            <li key={movie.show.id}>
                                <a href={movie.show.url}>
                                    {movie.show.name}
                                </a>
                            </li>
                        );
                    })
                }
            </div>
            <Footer />
        </div>
    );
}

export default Movies;