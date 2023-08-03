import { ScoredFish } from "../Types/Types"

const FishComponent = ({fish}: {fish :ScoredFish}) =>{
    return <div>
        {fish.units === "Metric" && <div>{fish.fishType} {fish.weightKg}kg {fish.score} </div>}
        {fish.units === "Imperial" && <div>{fish.fishType} {fish.weightLb}lb {fish.weightOz}oz {fish.score}</div>}
    </div>
}

export default FishComponent;