import {v4} from 'uuid'
import * as types from '../constants/ActionTypes'
import ApiService from '../api/ApiService'

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
    type: types.TOGGLE_TODO,
    id
  });
} 

export const loadLastTodos  = () => async dispatch => {
    const data = await ApiService.getTodos();
    dispatch(loadTodoSuccess(data));
} 

export const loadTodoSuccess = (todos) => ({
    type: 'LOAD_TODO_SUCCESS', 
    todos
})
