import { Accordion, Button } from "react-bootstrap";
import { useFishModal } from "../Context/AddFishModelContext";
import { useCompetition } from "../Context/CompetitionContext";
import { getAnglerScore } from "../Functions/getAnglerScore";
import { Angler } from "../Types/Types"
import FishComponent from "./FishComponent";

const AnglerComponent = ({angler}: {angler :Angler}) =>{
    const [competition] = useCompetition();
    const fishModalOptions = useFishModal()
    return <Accordion>
            <Accordion.Header>{angler.name} - {getAnglerScore(angler, competition.limitations, competition.region)}</Accordion.Header>
            <Accordion.Body>
                {angler.fish.map((f,i)=><FishComponent key={angler.name + 'fish'+i} fish={f}/>)}
                <Button onClick={()=>fishModalOptions.showModal(angler.name)}>AddFish</Button>
            </Accordion.Body>
        </Accordion>
}



export default AnglerComponent;