import {v4} from 'uuid'
import * as types from './actionTypes'
import  { fetchTodos } from '../api/TodoApi'

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  id: v4(),
  text
})

export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
})

export const onTodoClick = (id) =>(dispatch) =>{
  dispatch({
    type: types.SET_VISIBILITY_FILTER,
    id
  });
} 

export const loadTodos = (filter) =>(dispatch) =>{
  fetchTodos(filter).then( (todos) =>{
      dispatch(loadTodoSuccess(todos));
  })
} 

export const loadTodoSuccess = (todos) => {
  return {
    type: types.LOAD_TODO_SUCCESS, 
    todos
  };
}
