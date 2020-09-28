import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import { Checkbox } from '@material-ui/core';
import { addTodo, increment, removeTodo } from '../actions';
import { useSelector } from 'react-redux';

function addNewTodo(dispatch, id, input, list) {
    const label = input.value;
    input.value = "";
    dispatch(increment(1));
    return dispatch(addTodo(id, label, list));
}

function createTodoItem(dispatch, todo) {
    return (
        <li id={todo.id} key={todo.id} className="todo-item">
            <Checkbox id={todo.id + ''} className="checkbox" />
            <div>{todo.label}</div>
            <span onClick={() => dispatch(removeTodo(todo.id))}>
                <FaTrashAlt className="remove" />
            </span>
        </li>
    );
}

function TodoContent(props) {
    const count = useSelector(state => state.counter);
    const { title, todos, dispatch, list, inputId } = props;

    return (
        <div className="todo-content">
            <h2>{title}</h2>
            <ul id={list} className="todo-list" >
                {
                    todos.filter((value) => value.list === list).map((todo) => {
                        return (createTodoItem(dispatch, todo));
                    })
                }
            </ul>
            <div className="todo-add">
                <input type="text" id={inputId} />
                <button className="btn-primary"
                    onClick={() => { addNewTodo(dispatch, count, document.querySelector('#' + inputId), list) }}>
                    +
                </button>
            </div>
        </div>
    );
}

export default TodoContent;