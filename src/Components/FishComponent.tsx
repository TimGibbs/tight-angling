import { useCompetition } from "../Context/CompetitionContext";
import { scoreFish } from "../Functions/scoreFish";
import { Fish } from "../Types/Types"

const FishComponent = ({fish}: {fish :Fish}) =>{
    const [competition] = useCompetition();
    const score = scoreFish(fish,competition.region);
    return <div>
        {fish.units === "Metric" && <div>{fish.fishType} {fish.weightKg}kg {score} </div>}
        {fish.units === "Imperial" && <div>{fish.fishType} {fish.weightLb}lb {fish.weightOz}oz {score}</div>}
    </div>
}

export default FishComponent;