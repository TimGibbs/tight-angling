import { Col, Row } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import { groupBy } from "../Functions/groupBy";
import { scoreFish } from "../Functions/scoreFish";
import { ScoredFish } from "../Types/Types";

export const BestPerSpecies = () => {
    const [competition,] = useCompetition();
    const fish = competition.anglers.flatMap(o => o.fish).map(o => ({ ...o, score: scoreFish(o, competition.region) }));
    let ret: ScoredFish[] = [];
    const grouped = groupBy(fish, x => x.fishType);
    for (const species in grouped) {
        const x = grouped[species].sort((a, b) => b.score - a.score).slice(0, 1);
        ret = [...ret, ...x];
    }
    ret = ret.sort((a, b) => a.fishType.localeCompare(b.fishType));

    return <div style={{ padding: "25px" }}>
        <Row><h3>Best Per Species</h3></Row>
        <Row><Col xs={3} style={{ fontWeight: "bold" }}>Name</Col><Col xs={6} style={{ fontWeight: "bold" }}>Weight</Col><Col xs={3} style={{ fontWeight: "bold" }}>Score</Col></Row>
        {ret.map((o, i) => <>
            <Row><h6>{o.fishType}</h6></Row>
            <Row><Col xs={3}>{o.angler}</Col>{o.units === "Metric" && <Col xs={6}>{o.weightKg}kg</Col>}
                {o.units === "Imperial" && <Col xs={6}>{o.weightLb}lb {o.weightOz}oz</Col>}<Col xs={3}>{o.score}</Col></Row>
        </>)}
    </div>;
};
