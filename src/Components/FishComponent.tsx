import { ScoredFish } from "../Types/Types"

const FishComponent = ({fish}: {fish :ScoredFish}) =>{
    return <div>
        {fish.units === "kg" && <div>{fish.fishType} {fish.weightKg}Kg {fish.score} </div>}
        {fish.units === "lb" && <div>{fish.fishType} {fish.weightLb}lb {fish.weightOz}oz {fish.score}</div>}
    </div>
}

export default FishComponent;