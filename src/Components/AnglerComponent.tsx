import { Angler } from "../Types/Types"
import FishComponent from "./FishComponent";

const AnglerComponent = ({angler}: {angler :Angler}) =>{
    return <div>
        {angler.name}
        {angler.fish.map(f=><FishComponent fish={f}/>)}
    </div>
}

export default AnglerComponent;