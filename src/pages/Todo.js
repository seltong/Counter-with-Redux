import React from 'react';

// Router
import { Link } from 'react-router-dom';

// My components
import TodoContent from '../components/TodoContent';
import Footer from '../components/Footer';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { moveTodo } from '../actions';

// React-icons
import {
    AiOutlineArrowLeft, AiOutlineArrowRight,
    AiOutlineLeftCircle, AiOutlineRightCircle
} from 'react-icons/ai';

// CSS
import '../style/todo.css';

function Todo() {
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();

    return (
        <div className="main" >
            <div>
                <Link to="/" >
                    <button className="btn-primary btn-top-prev">
                        <AiOutlineArrowLeft /> Prev
                    </button>
                </Link>

                <Link to="/movies">
                    <button className="btn-primary btn-top-next" >
                        Next < AiOutlineArrowRight />
                    </button>
                </Link>
            </div>

            <div className="title">
                <h1> To Do </h1>
            </div>

            <div className="main-todo" >
                <TodoContent title="To Do" todos={todos}
                    dispatch={dispatch} list="todo" inputId="inptAddTodo" />

                <div className="todo-actions">
                    <AiOutlineRightCircle className="btn-primary btn-action"
                        onClick={() => dispatch(moveTodo(document.querySelectorAll("#todo li > .Mui-checked input"), 'doing'))} />
                    <AiOutlineLeftCircle className="btn-primary btn-action"
                        onClick={() => dispatch(moveTodo(document.querySelectorAll("#doing li > .Mui-checked input"), 'todo'))} />
                </div>

                <TodoContent title="Doing" todos={todos} dispatch={dispatch}
                    list="doing" inputId="inptAddDoing" />

                <div className="todo-actions">
                    <AiOutlineRightCircle className="btn-primary btn-action"
                        onClick={() => dispatch(moveTodo(document.querySelectorAll("#doing li > .Mui-checked input"), 'done'))} />
                    <AiOutlineLeftCircle className="btn-primary btn-action"
                        onClick={() => dispatch(moveTodo(document.querySelectorAll("#done li > .Mui-checked input"), 'doing'))} />
                </div>

                <TodoContent title="Done" todos={todos} dispatch={dispatch}
                    list="done" inputId="inptAddDone" />

            </div>

            <Footer />
        </div>
    );
}

export default Todo;