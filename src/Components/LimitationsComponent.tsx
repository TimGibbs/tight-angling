import { Col, Form, Row } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";

export const LimitationsComponenet = () => {
    const [competition, setCompetition] = useCompetition();

    return <div style={{paddingTop:"15px"}}>
        <Row>
            <Col style={{fontWeight:"bold"}} >Max Fish</Col>
            <Col style={{fontWeight:"bold"}}>Max Species</Col>
            <Col style={{fontWeight:"bold"}}>Max Per Species</Col>
        </Row>
        <Row>
            <Col>
                <Form.Control type='number' 
                    value={competition.limitations.maxFish ?? "-"} 
                    onChange={(e) => { setCompetition({ ...competition, limitations: { ...competition.limitations, maxFish: parseInt(e.target.value) } }); }} 
                    min={0} 
                    style={{ textAlign: "center" }} />
            </Col>
            <Col>
                <Form.Control type='number' 
                    value={competition.limitations.maxSpecies ?? "-"} 
                    onChange={(e) => { setCompetition({ ...competition, limitations: { ...competition.limitations, maxSpecies: parseInt(e.target.value) } }); }} 
                    min={0} 
                    style={{ textAlign: "center" }} />
            </Col>
            <Col>
                <Form.Control type='number' 
                    value={competition.limitations.perSpecies ?? "-"} 
                    onChange={(e) => { setCompetition({ ...competition, limitations: { ...competition.limitations, perSpecies: parseInt(e.target.value) } }); }} 
                    min={0} 
                    style={{ textAlign: "center" }} />
            </Col>
        </Row>
    </div>;
};
