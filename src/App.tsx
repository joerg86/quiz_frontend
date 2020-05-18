import React, { useState } from 'react';
import Nav from './components/Nav';
import Container from "react-bootstrap/Container";
import TeamsPage from './pages/TeamsPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PlayPage from './pages/PlayPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import KBPage from './pages/KBPage';
import KBBrowsePage from "./pages/KBBrowsePage";
import QuestionEditPage from './pages/QuestionEditPage';
import QuestionDeletePage from './pages/QuestionDeletePage';

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("jwt") !== null);

  return (
    <>
      <div className="d-flex flex-column flex-grow-1 h-100">

        <Router>
        <Nav auth={auth} setAuth={setAuth}/>
          <Switch>
            <Route path="/teams/:id" component={PlayPage}/>
            <Route path="/teams" component={TeamsPage}/>
            <Route path="/login" render={(props) => <LoginPage {...props} setAuth={setAuth} auth={auth}/>}/>
            <Route path="/kb/browse/:topicID?" component={KBBrowsePage}/>
            <Route path="/kb/edit/:questionID" component={QuestionEditPage}/>
            <Route path="/kb/delete/:questionID" component={QuestionDeletePage}/>

            <Route path="/kb" component={KBPage}/>
            <Route path="/" component={HomePage}/>
            
          </Switch>
        </Router>
        
      </div>
    </>
  );
}

export default App;
