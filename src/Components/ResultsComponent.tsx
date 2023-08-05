import { Container } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import {getAnglerScore} from "../Functions/getAnglerScore" 
import { scoreFish } from "../Functions/scoreFish";

export const ResultsComponent = () => {
    const [competition, ] = useCompetition();

    const bestFish = competition.anglers.flatMap(o=>o.fish).map(o=>({...o, score:scoreFish(o,competition.region)})).sort((a,b)=>b.score-a.score).slice(0,3);
    const bestAngler = competition.anglers.map(o=>({score: getAnglerScore(o, competition.limitations, competition.region), name:o.name})).sort((a,b)=>b.score-a.score)
    return <Container>
        <h3>Best Angler</h3>
        <ol>
            {bestAngler.map((o,i)=><li key={"bestAngler"+i}>{o.name} {o.score}</li>)}
        </ol>
        <h3>Best Fish</h3>
        <ol>
            {bestFish.map((o,i)=><li key={"bestFish"+i}>{o.angler} {o.fishType} {o.score}</li>)}
        </ol>
    </Container>
} 