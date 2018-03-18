
import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  loadLastTodos:PropTypes.func.isRequired
}

class TodoList extends React.Component {
  componentDidMount(){
    this.props.loadLastTodos();
  }

  render() {
    const { todos, onTodoClick } = this.props
    const list = todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={()=> onTodoClick(todo.id)}
      />
    )

    return (
      <ul>
          {list}
        </ul>
    )
  }
}

TodoList.propTypes = propTypes

export default TodoList
