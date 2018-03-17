import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import App from './App'
import TodoApp from './TodoApp'
import { BrowserRouter as Router, Route } from "react-router-dom";

const Root = ({store}) => (
    <Provider store = {store}>
        <Router>
            <div>
                <Route exact  path = '/' component = {App} />
                <Route path = '/todo/:filter' component = {TodoApp} />

            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root