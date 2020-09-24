import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from '@material-ui/core';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlinePlus } from 'react-icons/ai';
import { addTodo } from '../actions';
import '../style/todo.css';

function Todo() {
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();

    return (
        <div className="App" >
            <div>
                <Link to="/" >
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
                <h1> To Do </h1>
            </div>

            <div className="main-todo" >
                <div className="todo-content">
                    <h2>To Do</h2>
                    <ul className="todo-list" >
                        {
                            todos.map((todo) => {
                                return (
                                    <li className="todo-item">
                                        <Checkbox className="checkbox" /> {todo}
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div>
                        <input type="text" id="inptAddTodo" />
                        <button className="btn-primary"
                            onClick={() => { dispatch(addTodo(document.querySelector('#inptAddTodo').value)) }}>
                            <AiOutlinePlus />
                        </button>
                    </div>
                </div>
            </div>

            <footer className="footer" >
                <span > &copy; By Selton Guedes 2020 </span>
            </footer>
        </div>
    );
}

export default Todo;