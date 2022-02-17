import React,{useState} from 'react'
import TodoList from './TodoList'
import InputForm from './InputForm'
import styles from './TodoApp.module.css'
import {v4 as uuid} from 'uuid';

const TodoApp = () =>{

    const initialTodos = [
        {
            id:uuid(),
            task: 'go to shopping',
        },

        {
            id:uuid(),
            task: 'learn react',
        },

        {
            id:uuid(),
            task: 'go to gym',
        },
        
    ];


    const [todos,setTodos] = useState(initialTodos);


    const addTodo = (inputTask) =>{
        setTodos((prevState) => {
            return [...prevState,{id:uuid(),task:inputTask}];
        })
    }


    const deleteTodo = (todoid) =>{
        setTodos((prevState) =>{
            return prevState.filter((todo)=>todo.id !== todoid);
        })
    }


    return (
        <div>
            <section className={styles['todo-form']}>
                <InputForm
                    addTodo = {addTodo}
                />
            </section>

            <section className={styles['todo-list']}>
                <TodoList 
                todos={todos}
                deleteTodo={deleteTodo}
                />
            </section>
        </div>
    )
}

export default TodoApp