import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useFishModal } from "../Context/AddFishModelContext";
import { useCompetition } from "../Context/CompetitionContext";
import { getAnglerScore } from "../Functions/getAnglerScore";
import { Angler } from "../Types/Types";
import FishComponent from "./FishComponent";
import DeleteIcon from "../Images/delete"
import FishIcon from "../Images/fish";


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
            <Row>
            <Col xs={8} style={{ fontWeight: "bold" }}>
                {angler.name} - {getAnglerScore(angler, competition.limitations, competition.region)}
            </Col>
            <Col xs={4} style={{ textAlign: "right" }}>
                <Button variant="danger" 
                onClick={()=>setCompetition({...competition, anglers:competition.anglers.filter(o=>o!==angler)})}
                style={{padding:"2px"}}><DeleteIcon/></Button>
            </Col>
            </Row>
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
            <Button onClick={() => fishModalOptions.showModal(angler.name)}>+ <FishIcon/></Button>
            </Container>
        </Accordion.Body>
        </Accordion>
    </Card>
  );
};

export default AnglerComponent;
