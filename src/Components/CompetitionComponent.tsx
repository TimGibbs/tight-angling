import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap"
import { useCompetition } from "../Context/CompetitionContext";
import { Regions } from "../Data/Regions";
import { scoreFish } from "../Functions/scoreFish";
import { Angler, Region } from "../Types/Types";
import { AddAnglerModel } from "./AddAnglerModal";
import AnglerComponent from "./AnglerComponent"

export const CompetitionComponent = () => {
    const [showAnglerModal, setShowAnglerModal] = useState<boolean>(false);
    const [competition, setCompetition] = useCompetition();
    //<Form.Control type='text' onChange={(e)=>setCompetition({...competition, name:e.target.value})} value={competition.name} placeholder='Example'></Form.Control>

    function onChangeRegion(region: Region){
        var anglers = [...competition.anglers];
        var g : Angler[] = anglers.map(o=> ({...o, fish: o.fish.map(f=>scoreFish(f,region))}))
        setCompetition({...competition, region: region, anglers:g})
    } 

    return <Container>
        <Form.Select onChange={(e)=>{
                var r = Regions.find(o=>o.letter === e.target.value);
                if(r !== undefined) { onChangeRegion(r)}}}
                value = {competition.region.letter}>
            {Regions.map((o,i)=><option key={o.letter} value={o.letter}>{o.name}</option>)}
        </Form.Select>  
        <h4>Anglers</h4>
        {competition.anglers.map((o,i)=><AnglerComponent key={'angler'+i} angler={o}/>)}
        <Button onClick={()=>setShowAnglerModal(true)}>+</Button>

        <AddAnglerModel show={showAnglerModal} onClose={()=>setShowAnglerModal(false)} competition={competition} setCompetition={setCompetition} />
    </Container>
} 