import { FishType } from "./FishType";

export type Fish = {
    angler : string
    fishType : FishType
    location : "Boat" | "Shore"
} & (
    {
        weightLb : number,
        weightOz : number,
        units : "Imperial"
    } | {
        weightKg : number,
        units : "Metric"
    })
export type ScoredFish = Fish & { score:number}