import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { useCompetition } from "../Context/CompetitionContext";
import { Regions } from "../Data/Regions";
import { AddAnglerModel } from "./AddAnglerModal";
import AnglerComponent from "./AnglerComponent"

export const CompetitionComponent = () => {
    const [showAnglerModal, setShowAnglerModal] = useState<boolean>(false);
    const [competition, setCompetition] = useCompetition();
    console.log(competition);
    return <div>
        <Form.Control type='text' onChange={(e)=>setCompetition({...competition, name:e.target.value})} value={competition.name} placeholder='Example'></Form.Control>
        <Form.Select onChange={(e)=>{
                var r = Regions.find(o=>o.letter === e.target.value)
                if(!!r) { setCompetition({...competition, region: r})}    
            }}
                value = {competition.region.letter}>
            {Regions.map((o,i)=><option key={o.letter} value={o.letter}>{o.name}</option>)}
        </Form.Select>  
        <h4>Anglers</h4>
        {competition.anglers.map((o,i)=><AnglerComponent key={'angler'+1} angler={o}/>)}
        <Button onClick={()=>setShowAnglerModal(true)}>+</Button>

        <AddAnglerModel show={showAnglerModal} onClose={()=>setShowAnglerModal(false)} competition={competition} setCompetition={setCompetition} />
    </div>
} 