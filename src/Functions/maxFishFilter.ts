import { ScoredFish } from "../Types/Types";

export function maxFishFilter(fish: ScoredFish[], maxFish: number | null): ScoredFish[] {
  if (!maxFish || fish.length < maxFish) {
    return fish;
  }

  return fish
    .slice()
    .sort((a, b) => b.score - a.score)
    .slice(0, maxFish);
}
