import React from 'react';
import './App.css';
import CompetitionPage from './Pages/CompetitionPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import  { ReactComponent as Fishing} from './Images/fishing.svg';
function App() {
  return ( 
    <div>
       <Navbar bg="dark" data-bs-theme="dark" style={{justifyContent:'center'}}>
          <Navbar.Brand><Fishing fill='white' stroke='white'/> Tight Angling</Navbar.Brand>
        </Navbar>
        <Container className="App">
       
        <CompetitionPage/>
      </Container>
    </div>
      
  );
}

export default App;
