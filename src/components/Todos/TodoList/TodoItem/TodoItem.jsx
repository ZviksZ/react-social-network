import React, {useState, useEffect} from 'react';
import {TodoTaskItem}               from "../TodoTaskItem/TodoTaskItem.jsx";

export const TodoItem = ({
                            id, title, items, deleteTodo,
                            editTodoTitle, getTodoListTasks, postTodoListTask,
                            updateTaskTitle, deleteTaskItem
                         }) => {
   const [editMode, setEditMode] = useState(false)
   const [value, setValue] = useState(title)
   const [taskTitle, setTaskTitle] = useState('');

   const deleteItem = (id) => {
      deleteTodo(id)
   }

   const editTitle = () => {
      editTodoTitle(id, value)
      setEditMode(false);
   }

   useEffect(() => {
      getTodoListTasks(id)
   }, [])

   const onAddTask = (e) => {
      e.preventDefault();
      postTodoListTask(id, taskTitle);
   }

   return (
      <li id={id} key={id}>
         {
            editMode ?
               <div>
                  <input type="text"
                         onChange={(e) => setValue(e.target.value)}
                         value={value}
                  />
                  <button onClick={editTitle}>Save</button>
               </div>

               :
               <span onDoubleClick={() => setEditMode(true)}>{title}</span>
         }

         <button onClick={() => deleteItem(id)}>Delete todo</button>

         <br/>
         
         <ul>
            { items ? items.map(i => <TodoTaskItem id={i.id}
                                                    item={i}
                                                    todoListId={i.todoListId}
                                                    title={i.title}
                                                    updateTaskTitle={updateTaskTitle}
                                                    deleteTaskItem={deleteTaskItem}
                                                    key={i.id}/>)
                  : null
            }
         </ul>

         <form onSubmit={onAddTask}>
            <input type="text"
                   onChange={(e) => setTaskTitle(e.target.value)}
                   value={taskTitle}
            />
            <button onClick={editTitle}>add task</button>
         </form>
      </li>
   );
}