import { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import { getAnglerScore } from "../Functions/getAnglerScore";
import { Angler } from "../Types/Types"
import { AddFishModal } from "./AddFishModal";
import FishComponent from "./FishComponent";

const AnglerComponent = ({angler}: {angler :Angler}) =>{
    const [showFishModal, setShowFishModal] = useState<boolean>(false);
    const [competition] = useCompetition();
    return <>
    <Accordion>
            <Accordion.Header>{angler.name} - {getAnglerScore(angler, competition.limitations, competition.region)}</Accordion.Header>
            <Accordion.Body>
                {angler.fish.map((f,i)=><FishComponent key={angler.name + 'fish'+i} fish={f}/>)}
                <Button onClick={()=>setShowFishModal(true)}>AddFish</Button>
            </Accordion.Body>
        </Accordion>

    <AddFishModal angler={angler} show={showFishModal} onClose={()=>setShowFishModal(false)}/>
</>
}



export default AnglerComponent;