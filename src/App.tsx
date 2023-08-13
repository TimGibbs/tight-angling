import './App.css';
import CompetitionPage from './Pages/CompetitionPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import  { ReactComponent as Fishing} from './Images/fishing.svg';
function App() {
  return ( 
    <div>
       <Navbar bg="dark" data-bs-theme="dark" style={{justifyContent:'center', height:'5vh'}}>
          <Navbar.Brand><Fishing fill='white' stroke='white'/> Tight Angling</Navbar.Brand>
        </Navbar>
        <div className="App" style={{height:'95vh'}}>
       
        <CompetitionPage/>
      </div>
    </div>
      
  );
}

export default App;
