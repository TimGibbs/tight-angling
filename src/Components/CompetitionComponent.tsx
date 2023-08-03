import { useState } from "react";
import { Button } from "react-bootstrap"
import { Competition } from "../Types/Types"
import { AddAnglerModel } from "./AddAnglerModal";
import AnglerComponent from "./AnglerComponent"

export const CompetitionComponent = ({competition, setCompetition} : {competition : Competition, setCompetition:(competition:Competition)=>void }) => {
    const [showAnglerModal, setShowAnglerModal] = useState<boolean>(false);
    return <div>
        <h2>{competition.name}</h2>
        <h6>{competition.region.name}</h6>
        <h4>Anglers</h4>
        {competition.anglers.map(o=><AnglerComponent angler={o} competition={competition} setCompetition={setCompetition}/>)}
        <Button onClick={()=>setShowAnglerModal(true)}>+</Button>

        <AddAnglerModel show={showAnglerModal} onClose={()=>setShowAnglerModal(false)} competition={competition} setCompetition={setCompetition} />
    </div>
} 