import {
  getAllTodos
} from './CommonSelectors'

export const getTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return getAllTodos(state)
    case 'completed':
      return getAllTodos(state).filter(t => t.completed)
    case 'active':
      return getAllTodos(state).filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
