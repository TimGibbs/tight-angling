import { Button, Container, Form } from "react-bootstrap"
import { defaultCompetition, useCompetition } from "../Context/CompetitionContext";
import { Regions } from "../Data/Regions";
import { Region } from "../Types/Types";
import AnglersComponent from "./AnglersComponent";
import LimitationsComponenet from "./LimitationsComponent";
import './CompetitionComponent.css'


export const CompetitionComponent = () => {
    const [competition, setCompetition] = useCompetition();

    function onChangeRegion(region: Region){
        setCompetition({...competition, region: region})
    } 

    return <Container className="competitionComponent" >
        <Button className="resetButton" variant="danger" 
                onClick={()=>setCompetition(defaultCompetition)}>
                    RESET
                </Button>
        <Form.Select className="regionPicker" onChange={(e)=>{
                var r = Regions.find(o=>o.letter === e.target.value);
                if(r !== undefined) { onChangeRegion(r)}}}
                value = {competition.region.letter}>
            {Regions.map((o,i)=><option key={o.letter} value={o.letter}>{o.name}</option>)}
        </Form.Select>
        <LimitationsComponenet/>
        <AnglersComponent/>
    </Container>
} 


