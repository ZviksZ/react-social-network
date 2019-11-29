import {todosAPI}    from "../api/api.js";

const SET_TODOS = 'my-social-network/todos/SET_TODOS';
const ADD_TODOLIST = 'my-social-network/todos/ADD_TODO';
const DELETE_TODOLIST = 'my-social-network/todos/DELETE_TODOLIST';
const EDIT_TODOLIST_TITLE = 'my-social-network/todos/EDIT_TODOLIST_TITLE';

let initialState = {
   todos: [],   
};

const todosReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_TODOS: {
         return {
            ...state,
            todos: action.todos
         }
      }
      case ADD_TODOLIST: {
         return {
            ...state,
            todos: [...state.todos, action.todoList]
         }
      }
      case DELETE_TODOLIST: {
         return {
            ...state,
            todos: state.todos.filter(t => t.id !== action.todoListId)
         }
      }
      case EDIT_TODOLIST_TITLE: {
         return {
            ...state,
            todos: state.todos.map(t => {
               if (t.id === action.todoListId) { 
                     t.title = action.title                  
               }
               return t;
            })
         }
      }
      default:
         return state;
   }
}

export const setTodos = todos => ({type: SET_TODOS, todos})
export const addTodoList = todoList => ({type: ADD_TODOLIST, todoList})
export const deleteTodoList = todoListId => ({type: DELETE_TODOLIST, todoListId})
export const editTodoListTitle = (todoListId, title) => ({type: EDIT_TODOLIST_TITLE, todoListId, title})



export const getTodos = () => async (dispatch) => {
   let response = await todosAPI.getTodos();
   
   dispatch(setTodos(response));  
}

export const postTodo = (title) => async (dispatch) => {
   let response = await todosAPI.createTodolist(title);
   console.log(response.data.data.item)
   if (response.data.resultCode === 0) {
      dispatch(addTodoList(response.data.data.item));
   }
}

export const deleteTodo = (todoListId) => async (dispatch) => {
   let response = await todosAPI.deleteTodolist(todoListId);
   
   if (response.data.resultCode === 0) {
      dispatch(deleteTodoList(todoListId));
   }
}

export const editTodoTitle = (todoListId, title) => async (dispatch) => {
   let response = await todosAPI.updateTodolistTitle(todoListId, title);
   
   if (response.data.resultCode === 0) {
      dispatch(editTodoListTitle(todoListId, title));
   }
}






export default todosReducer;