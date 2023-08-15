import CompetitionPage from './Pages/CompetitionPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import  { ReactComponent as Fishing} from './Images/fishing.svg';
import './App.css';

function App() {
  return ( 
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="titleBar">
        <Navbar.Brand><Fishing fill='white' stroke='white'/> Tight Angling</Navbar.Brand>
      </Navbar>
      <div className="App">
        <CompetitionPage/>
      </div>
    </div>
      
  );
}

export default App;
