import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
// import Media from './Pages/Media'


function App(){
  return <div>
    <Router>
      <Banner />
      <NavBar />
      <Switch>
        <Home />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  </div>;
    // <BrowserRouter>
    //   <Container>
    //     <Media />
    //     <Switch>
    //       <Route path="/." component={Home} />
    //       <Route path="/Media" component={Media} />
    //     </Switch>
    //   </Container>
    // </BrowserRouter>

}

export default App;
