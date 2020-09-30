import React, { useState } from 'react';

// Router
import { Link } from 'react-router-dom';

// My components
import Footer from '../components/Footer';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { searchMovie } from '../actions';

// React-icons
import {
    AiOutlineArrowLeft, AiOutlineArrowRight
} from 'react-icons/ai';

function Movies() {
    const movies = useSelector(state => state.movies);
    const [inputValue, setInputValue] = useState('');
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
                <h1>List of Movies</h1>
            </div>
            <div>
                <input id="inptSearchMovie" onChange={(event) => setInputValue(event.target.value)} />
                <button className="btn-primary"
                    onClick={() => dispatch(searchMovie(inputValue, dispatch))}>
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