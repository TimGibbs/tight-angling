import { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { getAnglerScore } from "../Functions/getAnglerScore";
import { Angler, Competition } from "../Types/Types"
import { AddFishModal } from "./AddFishModal";
import FishComponent from "./FishComponent";

const AnglerComponent = ({angler, competition, setCompetition}: {angler :Angler, competition : Competition, setCompetition : (comp:Competition)=>void}) =>{
    const [showFishModal, setShowFishModal] = useState<boolean>(false);


    return <>
    <Accordion>
            <Accordion.Header>{angler.name} - {getAnglerScore(angler, competition.limitations)}</Accordion.Header>
            <Accordion.Body>
                {angler.fish.map(f=><FishComponent fish={f}/>)}
                <Button onClick={()=>setShowFishModal(true)}>AddFish</Button>
            </Accordion.Body>
        </Accordion>

    <AddFishModal angler={angler} show={showFishModal} onClose={()=>setShowFishModal(false)} competition={competition} setCompetition={setCompetition}/>
</>
}



export default AnglerComponent;