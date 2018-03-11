import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import ToDoList from './TodoList'
import UndoRedo from '../containers/UndoRedo'

const App = () => (
  <div>
    <AddTodo />
    <ToDoList />
    <Footer />
    <UndoRedo />
  </div>
)

export default App
