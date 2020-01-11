import React from 'react'
import Input from './form'
import Nav from './nav-bar'
import Greet from './greeting'
import {ThemeProvider} from 'styled-components'
import theme from './theme'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

const App = () => (
<ThemeProvider theme={theme}>
  <Router>
    <Nav/>
    <Switch>
      <Route exact path="/home">
        <Greet />
      </Route>
      <Route path="/pa">
            <Input/>
      </Route>
    </Switch>
  </Router>
</ThemeProvider>

)

export default App