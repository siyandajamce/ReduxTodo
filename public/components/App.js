import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'


const App = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <deleteTodo/>
  </div>
);

export default App;
