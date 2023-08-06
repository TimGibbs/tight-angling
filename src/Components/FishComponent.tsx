import { Col, Row } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import { scoreFish } from "../Functions/scoreFish";
import { Fish } from "../Types/Types";

interface FishComponentProps {
  fish: Fish;
}

const FishComponent: React.FC<FishComponentProps> = ({ fish }) => {
  const [competition] = useCompetition();
  const score = scoreFish(fish, competition.region);

  return (
    <Row>
      <Col xs={6} style={{ textAlign: "left" }}>
        {fish.fishType}
      </Col>
      {fish.units === "Metric" ? (
        <Col xs={4}>{fish.weightKg}kg</Col>
      ) : (
        <Col xs={4}>{fish.weightLb}lb {fish.weightOz}oz</Col>
      )}
      <Col xs={2}>{score}</Col>
    </Row>
  );
};

export default FishComponent;
