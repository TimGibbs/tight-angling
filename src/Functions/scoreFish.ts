import { Fish, Region, ScoredFish } from "../Types/Types";

export function scoreFish(fish : Fish, region : Region) : ScoredFish {

    const values = region.values.find(f=>f.fishType === fish.fishType);

    if(!values) return {...fish, score:0};

    if(fish.units === "kg"){
        if(fish.location === "Boat"){
            return {...fish, score:Math.round((fish.weightKg / values.boatKg) * 100)};
        }
        if(fish.location === "Shore"){
            return {...fish, score:Math.round((fish.weightKg / values.shoreKg) * 100)};
        }
    }
    if(fish.units === "lb"){
        const val = fish.weightLb + fish.weightOz/16
        if(fish.location === "Boat"){
            return {...fish, score:Math.round((val / values.boatLb) * 100)};
        }
        if(fish.location === "Shore"){
            return {...fish, score:Math.round((val / values.shoreLb) * 100)};
        }
    }
    return {...fish, score:0};
}