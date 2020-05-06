import React from 'react';
import Nav from './components/Nav';
import Container from "react-bootstrap/Container";
import TeamsPage from './pages/TeamsPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
      <Nav/>
      <Container className="p-3">
        <Switch>
          <Route path="/teams">
            <TeamsPage/> 
          </Route>
        </Switch>
      </Container>
      </Router>
    </>
  );
}

export default App;
