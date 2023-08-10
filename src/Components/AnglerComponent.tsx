import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useFishModal } from "../Context/AddFishModelContext";
import { useCompetition } from "../Context/CompetitionContext";
import { getAnglerScore } from "../Functions/getAnglerScore";
import { Angler } from "../Types/Types";
import FishComponent from "./FishComponent";
import { ReactComponent as DeleteIcon} from "../Images/delete.svg"
import { ReactComponent as FishIcon} from "../Images/fish.svg";


interface AnglerComponentProps {
  angler: Angler;
}

const AnglerComponent: React.FC<AnglerComponentProps> = ({ angler }) => {
  const [competition, setCompetition] = useCompetition();
  const fishModalOptions = useFishModal();

  return (
    <Card style={{marginBottom:"5px"}}>
        <Accordion>
        <Accordion.Header>
            <div style={{width:'100%', display:'flex', justifyContent:'center', textAlign:'left'}}>
                <Button variant="danger" 
                onClick={()=>setCompetition({...competition, anglers:competition.anglers.filter(o=>o!==angler)})}
                style={{padding:"2px"}}>
                    <DeleteIcon stroke='white'/>
                </Button>
                <h5 style={{ fontWeight: "bold", textAlign:'center', margin:'0 auto' }} >
                    {angler.name} - {getAnglerScore(angler, competition.limitations, competition.region)}
                </h5>
            </div>
        </Accordion.Header>
        <Accordion.Body style={{padding:"0px"}}>
            <Container>
            <Row>
                <Col xs={5} style={{ textAlign: "left", fontWeight: "bold" }}>
                Fish
                </Col>
                <Col xs={4} style={{ fontWeight: "bold" }}>
                Weight
                </Col>
                <Col xs={2} style={{ fontWeight: "bold" }}>
                Score
                </Col>
            </Row>
            {angler.fish.map((fish, index) => (
                <FishComponent key={`fish-${index}`} fish={fish} />
            ))}
            <Button onClick={() => fishModalOptions.showModal(angler.name)}>
                + <FishIcon/>
            </Button>
            </Container>
        </Accordion.Body>
        </Accordion>
    </Card>
  );
};

export default AnglerComponent;
