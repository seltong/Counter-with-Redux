import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../style/counter.css';

function getValueOfElementById(id) {
    return parseInt(document.getElementById(id).value);
}

function Counter() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <Link to="/todo">
                <button className="btn-primary btn-top-next">
                    Next <AiOutlineArrowRight />
                </button>
            </Link>

            <div className="title">
                <h1>Counter {counter}</h1>
            </div>

            <hr />

            <div className="buttons-container">
                <button className="btn-primary" onClick={() => dispatch(increment(1))}>+</button>
                <button className="btn-primary" onClick={() => dispatch(decrement(1))}>-</button>
            </div>

            <hr />

            <div className="custom-container">
                <span>Type a custom value:</span>
                <input type="number" id='inptCustomValue' />
                <button className="btn-primary" onClick={() => dispatch(increment(getValueOfElementById('inptCustomValue')))}>Add</button>
                <button className="btn-primary" onClick={() => dispatch(decrement(getValueOfElementById('inptCustomValue')))}>Subtract</button>
            </div>

            { isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}

            <footer className="footer">
                <span>&copy; By Selton Guedes 2020</span>
            </footer>
        </div>
    );
}


export default Counter;