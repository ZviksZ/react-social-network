import React, {useState, useEffect}      from 'react';

export const TodoTaskItem = ({id, title, todoListId, updateTaskTitle, item, deleteTaskItem}) => {
   const [editMode, setEditMode] = useState(false)
   const [value, setValue] = useState(title);
   const [taskTitle, setTaskTitle] = useState('');
   
   const deleteItem = (id) => {
      deleteTaskItem(todoListId, id)
   }
   
   const editTitle = () => {
      const newItem= {
         ...item,
         title: value
      }
      updateTaskTitle(todoListId, id, newItem);  
      
      setEditMode(false);
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

         <button onClick={() => deleteItem(id)}>Delete task</button>

      </li>
   );
}