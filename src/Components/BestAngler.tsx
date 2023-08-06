import { Col, Row } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import { getAnglerScore } from "../Functions/getAnglerScore";
import { orderByScoreThenCountDescending } from "../Functions/orderByScoreThenCountDescending";

export const BestAngler = () => {
    const [competition,] = useCompetition();
    const bestAngler = competition.anglers
        .map(o => ({ score: getAnglerScore(o, competition.limitations, competition.region), name: o.name, count: o.fish.length }))
        .sort((a, b) => orderByScoreThenCountDescending(a, b));
    return <div style={{ padding: "25px" }}>
        <Row><h3>Best Angler</h3></Row>
        <Row><Col xs={3} style={{ fontWeight: "bold" }}>Name</Col><Col style={{ fontWeight: "bold" }}>Score</Col><Col xs={3} style={{ fontWeight: "bold" }}>Count</Col></Row>
        {bestAngler.map((o, i) => <Row key={"bestAngler" + i}><Col xs={3}>{o.name}</Col><Col>{o.score}</Col><Col xs={3}>{o.count}</Col></Row>)}
    </div>;
};
