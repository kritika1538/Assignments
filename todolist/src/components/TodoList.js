import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'


const TodoList = ({todos,deleteTodo}) =>{
    return (
        <ul className={styles['todo-list']}>
            
            {
                todos.map((todo,idx) =>{
                    return <Todo
                    id={todo.id} 
                    task={todo.task}
                    key={idx}
                    deleteTodo={deleteTodo}
                    />
                })
            }

        </ul>
    )
}

export default TodoList 