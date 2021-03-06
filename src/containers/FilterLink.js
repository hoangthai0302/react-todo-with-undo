import React from 'react'
import { NavLink  } from 'react-router-dom'


const FilterLink = ({ filter, children}) => (
  <NavLink  
    to= {filter === 'all' ?'/todo' : '/todo/' + filter}

    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
    >
    {children}
    </NavLink >
)

export default FilterLink
