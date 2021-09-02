import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Styles */
import './App.css';

/* Components */
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

/* Pages */
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";


function App() {

  return (
    <Router>

      <div className="App">
        <Navbar bg="dark" variant="dark" id="header">
          <Container>
          <Navbar.Brand href="#home" id="brand">FOSS4Gx Charlottesville</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="registration">Registration</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="sponsors">Sponsors</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
          </Container>
        </Navbar>

        {/* Establishing routes to all endpoints */}
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Homepage />
          </Route>
          <Route exact path="/registration">
            <Register />
          </Route>
        </Switch>
        

    </div>
   </Router>
  );
}

export default App;
