
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { connect } from 'react-redux'
import* as actions from '../actions'

class TodoList extends Component {
  static  propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
  }

  render() {
    const { todos, onTodoClick } = this.props
    const list = todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={()=>onTodoClick(todo.id)}
      />
    )

    return (
      <ul>
          {list}
        </ul>
    )
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
})


export default connect(
  mapStateToProps,
  actions
)(TodoList)

