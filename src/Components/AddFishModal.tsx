import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap"
import { useFishModal } from "../Context/AddFishModelContext";
import { useCompetition } from "../Context/CompetitionContext";
import { FishType, fishTypesArray, isFishType } from "../Types/FishType";
import { Fish, Competition } from "../Types/Types";
import { isUnit, Unit, unitsArray } from "../Types/Units"

export const AddFishModal = () => {
    const fishModalOptions = useFishModal()

    const [fishType, setFishType] = useState<FishType>('ANGLER FISH');
    const [fishWeightKg, setFishWeightKg] = useState<number>(0)
    const [fishWeightLb, setFishWeightLb] = useState<number>(0)
    const [fishWeightOz, setFishWeightOz] = useState<number>(0)
    const [units, setUnits] = useState<Unit>('Imperial')
    const [competition, setCompetition] = useCompetition();
    return <Modal show={fishModalOptions.show} backdrop='static' >
    <Modal.Header>Add Fish</Modal.Header>
    <Modal.Body>
        <Container>
            <Row>
                <Form.Select onChange={(e)=>{
                    if(isFishType(e.target.value)){
                        setFishType(e.target.value)
                    }}} 
                    value={fishType}>
                    {fishTypesArray.map(o=><option key={o} value={o}>{o}</option>)}
                </Form.Select>
            </Row>
            <Row>
                <Form.Select onChange={(e)=>{
                    if(isUnit(e.target.value)){
                        setUnits(e.target.value)
                    }}}
                    value = {units}>
                    {unitsArray.map(o=><option key={o} value={o}>{o}</option>)}
                </Form.Select>
            </Row>
            
            {units==="Metric" &&
            <Row>
                <Form.Control type='number' onChange={e=> setFishWeightKg(parseFloat(e.target.value))} placeholder='kg' min={0} />
            </Row>}
            {units==="Imperial" &&
            <Row>
                <Col>
                    <Form.Control type='number' onChange={e=> setFishWeightLb(parseFloat(e.target.value))} placeholder='lb' min={0} />
                </Col>
                <Col>
                    <Form.Control type='number' onChange={e=> setFishWeightOz(parseFloat(e.target.value))} placeholder='oz' min={0} max={16} />
                </Col>
            </Row>}
        </Container>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={()=>{
            const fish : Fish = units === "Metric" 
            ? {fishType:fishType, units:'Metric', weightKg:fishWeightKg, location:competition.isShore ? "Shore" : "Boat", angler: fishModalOptions.anglerName} 
            : {fishType:fishType, units:'Imperial', weightLb:fishWeightLb, weightOz:fishWeightOz, location:competition.isShore ? "Shore" : "Boat", angler: fishModalOptions.anglerName}
            const s = addFish(competition,fish);
            setCompetition({...s})
            fishModalOptions.hideModal();
            setFishType('ANGLER FISH');
        }
    }>Add</Button>
        <Button onClick={()=> {fishModalOptions.hideModal(); setFishType('ANGLER FISH');}} >Cancel</Button>
    </Modal.Footer>
    </Modal>
}


function addFish(competition : Competition, fish : Fish) : Competition {
    competition.anglers.find(o=>o.name===fish.angler)?.fish.push(fish);
    return competition
}