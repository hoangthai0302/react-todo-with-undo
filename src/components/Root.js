import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import App from './App'
import TodoApp from './TodoApp'
import { BrowserRouter as Router, Route ,  Switch} from "react-router-dom";

const Root = ({store}) => (
    <Provider store = {store}>
        <Router>
            <Switch>
                <Route exact  path = '/' component = {App} />
                <Route exact path = '/todo/:filter?' component = {TodoApp} />
            </Switch>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root