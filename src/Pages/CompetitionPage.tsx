import { useState } from "react"
import { CompetitionComponent } from "../Components/CompetitionComponent"
import RegionA from "../Data/RegionA"
import { Competition } from "../Types/Types"

export default function CompetitionPage() {

    const [competition, setCompetition] = useState<Competition>({ name:"Example", region: RegionA, isShore:true, limitations: {maxFish:10, maxSpecies: 5, perSpecies:3}, anglers:[]  })
    return <div>
        <CompetitionComponent competition={competition} setCompetition={setCompetition}/>
    </div>


}



