import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import AnglerComponent from "../Components/AnglerComponent"
import RegionB from "../Data/RegionB"
import { scoreFish } from "../Functions/scoreFish"
import useRegions from "../Hooks/useRegions"
import { Competition, Fish } from "../Types/Types"

export default function CompetitionPage() {

    const [competition, setCompetition] = useState<Competition>({ name:"Example", region: RegionB, limitations: {maxFish:10, maxSpecies: 5, perSpecies:3}, anglers:[]  })
    console.log(competition)

    const Comp = ({competition} : {competition : Competition }) => {
        return <div>
            <h2>{competition.name}</h2>
            <h6>{competition.region.name}</h6>
            <h4>Anglers</h4>
            {competition.anglers.map(o=><AnglerComponent angler={o}/>)}
            <Button onClick={()=>{
                const s = addAngler(competition,"ABC");
                setCompetition({...s})}
                }>AddAngler</Button>
        </div>
    } 
    
    return <div>
        
        {!competition && <NewComp/>}
        {competition && <Comp competition={competition}/>}
    </div>


}

function addAngler(competition : Competition, angler : string) : Competition {
    competition.anglers = [...competition.anglers, {name:angler, fish:[]}]
    return competition;
}

function addFish(competition : Competition, fish : Fish) : Competition {
    const scored = scoreFish(fish,competition.region);
    competition.anglers.find(o=>o.name===fish.angler)?.fish.push(scored);
    return competition
}



function NewComp() {
    const regions = useRegions();
    const [name, setName] = useState<string>('');
    const [region, setRegion] = useState<string>('A');
    return <Form>
    <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e:any) => {setName(e.target.value); console.log(name)}} />
    </Form.Group>
    <Form.Group>
        <Form.Label>Region</Form.Label>
        <Form.Control as="select" value={region} onChange={(e:any) => setRegion(e.target.value)}>
            {Object.entries(regions).map(([key,value])=> <option value={key}>{value.name}</option>)}
        </Form.Control>
    </Form.Group>
    </Form>
}