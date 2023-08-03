import { useState } from "react";
import { Accordion, Button, Form, Modal } from "react-bootstrap";
import { getAnglerScore } from "../Functions/getAnglerScore";
import { scoreFish } from "../Functions/scoreFish";
import { fishTypesArray, isFishType } from "../Types/FishType";
import { Angler, Competition, Fish, FishType, Unit } from "../Types/Types"
import { isUnit, unitsArray } from "../Types/Units";
import FishComponent from "./FishComponent";

const AnglerComponent = ({angler, competition, setCompetition}: {angler :Angler, competition : Competition, setCompetition : (comp:Competition)=>void}) =>{
    const [showFishModal, setShowFishModal] = useState<boolean>(false);
    const [fishType, setFishType] = useState<FishType>('ANGLER FISH');
    const [fishWeightKg, setFishWeightKg] = useState<number>(0)
    const [fishWeightLb, setFishWeightLb] = useState<number>(0)
    const [fishWeightOz, setFishWeightOz] = useState<number>(0)
    const [units, setUnits] = useState<Unit>('Imperial')

    return <>
    <Accordion>
            <Accordion.Header>{angler.name} - {getAnglerScore(angler, competition.limitations)}</Accordion.Header>
            <Accordion.Body>
                {angler.fish.map(f=><FishComponent fish={f}/>)}
                <Button onClick={()=>setShowFishModal(true)}>AddFish</Button>
            </Accordion.Body>
        </Accordion>

<Modal show={showFishModal} backdrop='static' >
<Modal.Header>Add Fish</Modal.Header>
<Modal.Body>
    <Form.Select onChange={(e)=>{
            if(isFishType(e.target.value)){
                setFishType(e.target.value)
            }}} 
            value={fishType}>
        {fishTypesArray.map(o=><option value={o}>{o}</option>)}
    </Form.Select>
    <Form.Select onChange={(e)=>{
            if(isUnit(e.target.value)){
                setUnits(e.target.value)
            }}}
            value = {units}>
        {unitsArray.map(o=><option value={o}>{o}</option>)}
    </Form.Select>    
    {units==="Metric" && <>
        <Form.Control type='number' onChange={e=> setFishWeightKg(parseFloat(e.target.value))} placeholder='kg' min={0} ></Form.Control>

    </>}
    {units==="Imperial" && <>
        <Form.Control type='number' onChange={e=> setFishWeightLb(parseFloat(e.target.value))} placeholder='lb' min={0}></Form.Control>
        <Form.Control type='number' onChange={e=> setFishWeightOz(parseFloat(e.target.value))} placeholder='oz' min={0} max={16}></Form.Control>
    </>}
</Modal.Body>
<Modal.Footer>
    <Button onClick={()=>{
        const fish : Fish = units === "Metric" 
        ? {fishType:fishType, units:'Metric', weightKg:fishWeightKg, location:competition.isShore ? "Shore" : "Boat", angler: angler.name} 
        : {fishType:fishType, units:'Imperial', weightLb:fishWeightLb, weightOz:fishWeightOz, location:competition.isShore ? "Shore" : "Boat", angler: angler.name}
        const s = addFish(competition,fish);
        setCompetition({...s})
        setShowFishModal(false);
        setFishType('ANGLER FISH');
    }
}>Add</Button>
    <Button onClick={()=> {setShowFishModal(false); setFishType('ANGLER FISH');}} >Cancel</Button>
</Modal.Footer>
</Modal>
</>
}

function addFish(competition : Competition, fish : Fish) : Competition {
    const scored = scoreFish(fish,competition.region);
    competition.anglers.find(o=>o.name===fish.angler)?.fish.push(scored);
    return competition
}


export default AnglerComponent;