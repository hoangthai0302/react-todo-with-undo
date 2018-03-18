import undoable, { includeAction } from 'redux-undo'
import * as types from '../constants/ActionTypes'

const todo = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case types.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
      case types.LOAD_TODO_SUCCESS:
      return [ ...state, ...action.todos]  

    default:
      return state
  }
}

const undoableTodos = undoable(todos, { filter: includeAction(['ADD_TODO', 'TOGGLE_TODO']) })

export default undoableTodos

