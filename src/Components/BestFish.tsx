import { Col, Row } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import { scoreFish } from "../Functions/scoreFish";

const BestFish = () => {
  const [competition] = useCompetition();
  const bestFish = competition.anglers
    .flatMap((angler) =>
      angler.fish.map((fish) => ({
        ...fish,
        score: scoreFish(fish, competition.region),
      }))
    )
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return (
    <div style={{ paddingTop: "25px" }}>
      <Row>
        <h3>Best Fish</h3>
      </Row>
      <Row>
        <Col xs={3} style={{ fontWeight: "bold" }}>
          Name
        </Col>
        <Col xs={6} style={{ fontWeight: "bold" }}>
          Fish
        </Col>
        <Col xs={3} style={{ fontWeight: "bold" }}>
          Score
        </Col>
      </Row>
      {bestFish.map((fish, index) => (
        <Row key={"bestFish" + index}>
          <Col xs={3}>{fish.angler}</Col>
          <Col xs={6}>{fish.fishType}</Col>
          <Col xs={3}>{fish.score}</Col>
        </Row>
      ))}
    </div>
  );
};

export default BestFish;
