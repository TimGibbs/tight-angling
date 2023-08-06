import { Button, Container, Form } from "react-bootstrap"
import { useAnglerModal } from "../Context/AddAnglerModalContext";
import { useCompetition } from "../Context/CompetitionContext";
import { Regions } from "../Data/Regions";
import { Region } from "../Types/Types";
import AnglerComponent from "./AnglerComponent"
import { LimitationsComponenet } from "./LimitationsComponenet";

export const CompetitionComponent = () => {
    const x = useAnglerModal()
    const [competition, setCompetition] = useCompetition();
    //<Form.Control type='text' onChange={(e)=>setCompetition({...competition, name:e.target.value})} value={competition.name} placeholder='Example'></Form.Control>

    function onChangeRegion(region: Region){
        setCompetition({...competition, region: region})
    } 

    return <Container style={{paddingTop:"25px"}}>
        <Form.Select onChange={(e)=>{
                var r = Regions.find(o=>o.letter === e.target.value);
                if(r !== undefined) { onChangeRegion(r)}}}
                value = {competition.region.letter}
                style={{ textAlign: "center" }} >
            {Regions.map((o,i)=><option key={o.letter} value={o.letter}>{o.name}</option>)}
        </Form.Select>
        <LimitationsComponenet/>
        <h4>Anglers</h4>
        {competition.anglers.map((o,i)=><AnglerComponent key={'angler'+i} angler={o}/>)}
        <Button onClick={()=>x.showModal()}>+</Button>
    </Container>
} 

