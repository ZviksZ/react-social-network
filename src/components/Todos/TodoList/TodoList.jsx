import React, {useState} from 'react';
import {TodoItem}        from "./TodoItem/TodoItem.jsx";

export const TodoList = (props) => {
   return (
      <ul>
         {
            props.todos.map(t => <TodoItem key={t.id} 
                                           id={t.id} 
                                           title={t.title}
                                           items={t.items}
                                           deleteTodo={props.deleteTodo}
                                           editTodoTitle={props.editTodoTitle}
                                           getTodoListTasks={props.getTodoListTasks}
                                           postTodoListTask={props.postTodoListTask}
                                           updateTaskTitle={props.updateTaskTitle}
                                           deleteTaskItem={props.deleteTaskItem}
            />)
         }
      </ul>
   );
}