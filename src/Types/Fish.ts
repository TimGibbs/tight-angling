import { FishType } from "./FishType";

export type Fish = {
    angler : string
    fishType : FishType
    location : "Boat" | "Shore"
} & (
    {
        weightLb : number,
        weightOz : number,
        units : "lb"
    } | {
        weightKg : number,
        units : "kg"
    })