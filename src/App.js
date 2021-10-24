import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Create } from './components/create.';
import { read } from './components/read';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          {/* //creates navbar */}
          <Navbar bg="primary" variant="dark">

            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            {/* //links to various pages */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>

          </Navbar>

          <br />


 {/* matches paths */}
          <Switch>
            <Route path='/' component={content} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/read' component={read} exact />
          </Switch>


        </div>
      </Router>
    );
  }
}

export default App;
