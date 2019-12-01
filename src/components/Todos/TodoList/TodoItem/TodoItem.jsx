import React, {useState, useEffect}      from 'react';

export const TodoItem = ({id, title, items, deleteTodo,editTodoTitle,getTodoListTasks,postTodoListTask}) => {
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

   useEffect( () => {
      getTodoListTasks(id)
   }, [])
   
   const onAddTask = (e) => {
      e.preventDefault();
      postTodoListTask(id, taskTitle);
   }
   
   return (
      <li id={id} key={id} onDoubleClick={() => setEditMode(true)}>
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
               title
         }        

         <button onClick={() => deleteItem(id)}>Delete todo</button>

         <br/>
         
         
         <ul>
            {
               items ? items.map(i => <li id={i.id} key={i.id}>{i.title}</li>) : null
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