import { ScoredFish } from "../Types/Types";

export function maxFishFilter(fish: ScoredFish[], maxFish: number | null): ScoredFish[] {
    if (!maxFish)
        return fish;
    return fish.sort((a, b) => b.score - a.score).slice(0, maxFish);
}
