import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import './style/global.css';

function getValueOfElementById(id) {
  return parseInt(document.getElementById(id).value);
}

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="title">
        <h1>Counter {counter}</h1>
      </div>

      <hr />
      
      <div className="buttons-container">
        <button onClick={() => dispatch(increment(1))}>+</button>
        <button onClick={() => dispatch(decrement(1))}>-</button>
      </div>

      <hr />

      <div className="custom-container">
        <span>Type a custom value:</span>
        <input type="number" id='inptCustomValue' />
        <button onClick={() => dispatch(increment(getValueOfElementById('inptCustomValue')))}>Add</button>
        <button onClick={() => dispatch(decrement(getValueOfElementById('inptCustomValue')))}>Subtract</button>
      </div>

      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}

      <footer className="footer">
        <span>&copy; By Selton Guedes 2020</span>
      </footer>
    </div>
  );
}

export default App;
