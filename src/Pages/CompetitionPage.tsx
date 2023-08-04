import { CompetitionComponent } from "../Components/CompetitionComponent"
import { CompetitionProvider } from "../Context/CompetitionContext"

export default function CompetitionPage() {

    return <div>
        <CompetitionProvider>
            <CompetitionComponent/>
        </CompetitionProvider>
    </div>


}



