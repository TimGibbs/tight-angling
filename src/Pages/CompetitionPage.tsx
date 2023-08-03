import { useState } from "react"
import { Form } from "react-bootstrap"
import RegionB from "../Data/RegionB"
import useRegions from "../Hooks/useRegions"
import { Competition, Region } from "../Types/Types"

export default function CompetitionPage() {

    const [competition, setCompetition] = useState<Competition>({ name:"Example", region: RegionB, limitations: {maxFish:10, maxSpecies: 5, perSpecies:3}, anglers:[]  })
    return <div>
        
        {!competition && <NewComp/>}
        {competition && <Comp competition={competition}/>}
    </div>
}


const Comp = ({competition} : {competition : Competition }) => {
    return <div>
        <h2>{competition.name}</h2>
        <h3>{competition.region.name}</h3>
    </div>
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