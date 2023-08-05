import { Fish, Region } from "../Types/Types";

export function scoreFish(fish : Fish, region : Region) : number{

    const values = region.values.find(f=>f.fishType === fish.fishType);

    if(!values) return 0;

    if(fish.units === "Metric"){
        if(fish.location === "Boat"){
            return Math.round((fish.weightKg / values.boatKg) * 100);
        }
        if(fish.location === "Shore"){
            return Math.round((fish.weightKg / values.shoreKg) * 100);
        }
    }
    if(fish.units === "Imperial"){
        const val = fish.weightLb + fish.weightOz/16
        if(fish.location === "Boat"){
            return Math.round((val / values.boatLb) * 100);
        }
        if(fish.location === "Shore"){
            return Math.round((val / values.shoreLb) * 100);
        }
    }
    return 0;
}