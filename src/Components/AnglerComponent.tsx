import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import { useFishModal } from "../Context/AddFishModelContext";
import { useCompetition } from "../Context/CompetitionContext";
import { getAnglerScore } from "../Functions/getAnglerScore";
import { Angler } from "../Types/Types"
import FishComponent from "./FishComponent";

const AnglerComponent = ({angler}: {angler :Angler}) =>{
    const [competition] = useCompetition();
    const fishModalOptions = useFishModal()
    return <Accordion>
            <Accordion.Header>{angler.name} - {getAnglerScore(angler, competition.limitations, competition.region)}</Accordion.Header>
            <Accordion.Body>
                <Container>
                    <Row>
                        <Col xs={6} style={{textAlign:"left", fontWeight:"bold"}}>Fish</Col>
                        <Col xs={4} style={{fontWeight:"bold"}}>Weight</Col>
                        <Col xs={2} style={{fontWeight:"bold"}}>Score</Col>
                    </Row>
                {angler.fish.map((f,i)=><FishComponent key={angler.name + 'fish'+i} fish={f}/>)}
                <Button onClick={()=>fishModalOptions.showModal(angler.name)}>AddFish</Button>
                </Container>
            </Accordion.Body>
        </Accordion>
}



export default AnglerComponent;