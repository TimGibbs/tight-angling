import { Col, Form, Row } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";

import './LimitationsComponent.css'

const LimitationsComponent = () => {
  const [competition, setCompetition] = useCompetition();

  const handleChange = (key: string, value: string) => {
    setCompetition({
      ...competition,
      limitations: { ...competition.limitations, [key]: parseInt(value) },
    });
  };

  return (
    <div className="limitationsComponent">
      <Row>
        <Col className="header">Max Fish</Col>
        <Col className="header" >Max Species</Col>
        <Col className="header">Max Per Species</Col>
      </Row>
      <Row>
        <Col>
          <Form.Control className="picker"
            type="number"
            value={competition.limitations.maxFish?.toString() ?? ""}
            onChange={(e) => handleChange("maxFish", e.target.value)}
            min={0}
          />
        </Col>
        <Col>
          <Form.Control className="picker"
            type="number"
            value={competition.limitations.maxSpecies?.toString() ?? ""}
            onChange={(e) => handleChange("maxSpecies", e.target.value)}
            min={0}
          />
        </Col>
        <Col>
          <Form.Control className="picker"
            type="number"
            value={competition.limitations.perSpecies?.toString() ?? ""}
            onChange={(e) => handleChange("perSpecies", e.target.value)}
            min={0}
          />
        </Col>
      </Row>
    </div>
  );
};

export default LimitationsComponent;
