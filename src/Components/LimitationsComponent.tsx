import { Col, Form, Row } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";

const LimitationsComponent = () => {
  const [competition, setCompetition] = useCompetition();

  const handleChange = (key: string, value: string) => {
    setCompetition({
      ...competition,
      limitations: { ...competition.limitations, [key]: parseInt(value) },
    });
  };

  return (
    <div style={{ paddingTop: "15px" }}>
      <Row>
        <Col style={{ fontWeight: "bold" }}>Max Fish</Col>
        <Col style={{ fontWeight: "bold" }}>Max Species</Col>
        <Col style={{ fontWeight: "bold" }}>Max Per Species</Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            type="number"
            value={competition.limitations.maxFish?.toString() ?? ""}
            onChange={(e) => handleChange("maxFish", e.target.value)}
            min={0}
            style={{ textAlign: "center" }}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            value={competition.limitations.maxSpecies?.toString() ?? ""}
            onChange={(e) => handleChange("maxSpecies", e.target.value)}
            min={0}
            style={{ textAlign: "center" }}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            value={competition.limitations.perSpecies?.toString() ?? ""}
            onChange={(e) => handleChange("perSpecies", e.target.value)}
            min={0}
            style={{ textAlign: "center" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default LimitationsComponent;
