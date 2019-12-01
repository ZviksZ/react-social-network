import React, {useState} from 'react';
import {TodoList}        from "./TodoList/TodoList.jsx";
import s                 from './Todos.module.css';

export const Todos = (props) => {
   const [value, setValue] = useState('')
   
   const postTodo = (e) => {
      e.preventDefault();
      props.postTodo(value);     
      
      setValue('')
   }
   
   return (
      <div>
         <form onSubmit={postTodo}>
            <input type="text" 
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
            />
            <button>ADD TODO</button>
         </form>
         
         <TodoList todos={props.todos} 
                   deleteTodo={props.deleteTodo}
                   editTodoTitle={props.editTodoTitle}
                   getTodoListTasks={props.getTodoListTasks}
                   postTodoListTask={props.postTodoListTask}
         />
      </div>
   );
}