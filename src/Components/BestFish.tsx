import { Col, Row } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import { scoreFish } from "../Functions/scoreFish";

export const BestFish = () => {
    const [competition,] = useCompetition();
    const bestFish = competition.anglers.flatMap(o => o.fish).map(o => ({ ...o, score: scoreFish(o, competition.region) })).sort((a, b) => b.score - a.score).slice(0, 3);
    return <div style={{ paddingTop: "25px" }}>
        <Row><h3>Best Fish</h3></Row>
        <Row><Col xs={3} style={{ fontWeight: "bold" }}>Name</Col><Col xs={6} style={{ fontWeight: "bold" }}>Fish</Col><Col xs={3} style={{ fontWeight: "bold" }}>Score</Col></Row>
        {bestFish.map((o, i) => <Row key={"bestFish" + i}><Col xs={3}>{o.angler}</Col><Col xs={6}> {o.fishType}</Col> <Col xs={3}>{o.score}</Col></Row>)}
    </div>;
};
