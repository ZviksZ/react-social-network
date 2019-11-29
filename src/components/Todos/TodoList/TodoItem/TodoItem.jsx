import React, {useState}      from 'react';

export const TodoItem = ({id, title, deleteTodo,editTodoTitle}) => {
   const [editMode, setEditMode] = useState(false)
   const [value, setValue] = useState(title)
   
   const deleteItem = (id) => {
      deleteTodo(id)
   }
   
   const editTitle = () => {      
      editTodoTitle(id, value)      
      setEditMode(false);
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
      </li>
   );
}