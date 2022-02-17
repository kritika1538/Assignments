import React from 'react'
import styles from './Todo.module.css';
import {FaTrashAlt} from 'react-icons/fa';

const Todo = (props) =>{

    const deleteTodoHandler=()=>{
        props.deleteTodo(props.id);
    }

    return (
        <li className={styles['items']}>
            <span>{props.task}</span>
            <span onClick={deleteTodoHandler} className={styles['todo-icon']}><FaTrashAlt/></span>
        </li>
    )
}

export default Todo 