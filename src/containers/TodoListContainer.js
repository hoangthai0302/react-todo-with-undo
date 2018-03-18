
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../actions/TodoActions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) =>{
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed)
    case 'active':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


  const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state.todos.present, ownProps.match.params.filter || 'all')
  })
  

  export default withRouter(connect(
    mapStateToProps,
    actions
  )(TodoList))
  
  
