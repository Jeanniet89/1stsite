import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Media from './Pages/Media'


const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <Home />
        <Media />
        <Switch>
          <Route path="/." component={Home} />
          <Route path="/Media" component={Media} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
