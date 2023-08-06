import { Col, Row } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import { getAnglerScore } from "../Functions/getAnglerScore";
import { orderByScoreThenCountDescending } from "../Functions/orderByScoreThenCountDescending";

const BestAngler = () => {
  const [competition] = useCompetition();

  const bestAngler = competition.anglers
    .map((angler) => ({
      score: getAnglerScore(angler, competition.limitations, competition.region),
      name: angler.name,
      count: angler.fish.length,
    }))
    .sort(orderByScoreThenCountDescending);

  return (
    <div style={{ padding: "25px" }}>
      <Row>
        <h3>Best Angler</h3>
      </Row>
      <Row>
        <Col xs={3} style={{ fontWeight: "bold" }}>
          Name
        </Col>
        <Col style={{ fontWeight: "bold" }}>Score</Col>
        <Col xs={3} style={{ fontWeight: "bold" }}>
          Count
        </Col>
      </Row>
      {bestAngler.map((angler, index) => (
        <Row key={"bestAngler" + index}>
          <Col xs={3}>{angler.name}</Col>
          <Col>{angler.score}</Col>
          <Col xs={3}>{angler.count}</Col>
        </Row>
      ))}
    </div>
  );
};

export default BestAngler;
