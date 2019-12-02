import React, {Component} from 'react';
import {connect}          from "react-redux";
import {compose}          from "redux";
import {
   deleteTaskItem,
   deleteTodo,
   editTodoTitle,
   getTodoListTasks,
   getTodos,
   postTodo,
   postTodoListTask,
   updateTaskTitle,
} from "../../redux/todos-reducer.js";
import {Todos}            from "./Todos.jsx";


class TodosContainer extends Component {
   componentDidMount() {
      this.props.getTodos()
   }

   render() {
      return <Todos deleteTodo={this.props.deleteTodo}
                    todos={this.props.todos}
                    postTodo={this.props.postTodo}
                    editTodoTitle={this.props.editTodoTitle}
                    getTodoListTasks={this.props.getTodoListTasks}
                    postTodoListTask={this.props.postTodoListTask}
                    updateTaskTitle={this.props.updateTaskTitle}
                    deleteTaskItem={this.props.deleteTaskItem}
      />
   }
}


let mapStateToProps = (state) => {
   return {
      todos: state.todoPage.todos
   }
}

export default compose(
   connect(mapStateToProps, {
      getTodos,
      postTodo,
      deleteTodo,
      editTodoTitle,
      getTodoListTasks,
      postTodoListTask,
      updateTaskTitle,
      deleteTaskItem,
   }))(TodosContainer);