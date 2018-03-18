import React from 'react'
import Header from './common/Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import ToDoListContainer from '../containers/TodoListContainer'
import UndoRedo from '../containers/UndoRedo'

const TodoApp = () => (
  <div>
    <Header />
    <AddTodo />
    <ToDoListContainer />
    <Footer />
    <UndoRedo />
  </div>
)

export default TodoApp
