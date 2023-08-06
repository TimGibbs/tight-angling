import { Col, Container, Row } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import {getAnglerScore} from "../Functions/getAnglerScore" 
import { scoreFish } from "../Functions/scoreFish";

export const ResultsComponent = () => {
    const [competition, ] = useCompetition();

    const bestFish = competition.anglers.flatMap(o=>o.fish).map(o=>({...o, score:scoreFish(o,competition.region)})).sort((a,b)=>b.score-a.score).slice(0,3);
    const bestAngler = competition.anglers
    .map(o=>({score: getAnglerScore(o, competition.limitations, competition.region), name:o.name, count: o.fish.length}))
    .sort((a,b)=>{if(a.score!==b.score) {return b.score-a.score} return b.count-a.count})
    return <Container>
        <Row><h3>Best Angler</h3></Row>
        <Row><Col xs={3}>Name</Col><Col>Score</Col><Col xs={3}>Count</Col></Row>
        {bestAngler.map((o,i)=><Row key={"bestAngler"+i}><Col xs={3}>{o.name}</Col><Col>{o.score}</Col><Col xs={3}>{o.count}</Col></Row>)}
        <Row><h3>Best Fish</h3></Row>
        <Row><Col xs={3}>Name</Col><Col xs={6}>Fish</Col><Col xs={3}>Score</Col></Row>
        {bestFish.map((o,i)=><Row key={"bestFish"+i}><Col xs={3}>{o.angler}</Col><Col xs={6}> {o.fishType}</Col> <Col  xs={3}>{o.score}</Col></Row>)}
    </Container>
} 