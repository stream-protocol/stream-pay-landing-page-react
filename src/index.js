import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Error404 from './views/error404'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Error404} path="**" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
