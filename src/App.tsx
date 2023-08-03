import React from 'react';
import './App.css';
import CompetitionPage from './Pages/CompetitionPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Container className="App">
      <CompetitionPage/>
    </Container>
  );
}

export default App;
