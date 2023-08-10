import { Container, Form } from "react-bootstrap"
import { useCompetition } from "../Context/CompetitionContext";
import { Regions } from "../Data/Regions";
import { Region } from "../Types/Types";
import AnglersComponent from "./AnglersComponent";
import LimitationsComponenet from "./LimitationsComponent";
import './CompetitionComponent.css'


export const CompetitionComponent = () => {
    const [competition, setCompetition] = useCompetition();
    //<Form.Control type='text' onChange={(e)=>setCompetition({...competition, name:e.target.value})} value={competition.name} placeholder='Example'></Form.Control>

    function onChangeRegion(region: Region){
        setCompetition({...competition, region: region})
    } 

    return <Container className="competition">
        <Form.Select onChange={(e)=>{
                var r = Regions.find(o=>o.letter === e.target.value);
                if(r !== undefined) { onChangeRegion(r)}}}
                value = {competition.region.letter}
                style={{ textAlign: "center" }} >
            {Regions.map((o,i)=><option key={o.letter} value={o.letter}>{o.name}</option>)}
        </Form.Select>
        <LimitationsComponenet/>
        <AnglersComponent/>
    </Container>
} 


