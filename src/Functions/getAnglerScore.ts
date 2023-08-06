import { Angler, Limitations, Region, ScoredFish } from "../Types/Types";
import { maxFishFilter, maxSpeciesFilter, perSpeciesFilter } from "./scoreFilters";
import { scoreFish } from "./scoreFish";

export function getAnglerScore(angler: Angler, limitations: Limitations, region: Region): number {
  const scoredFish: ScoredFish[] = angler.fish.map((o) => ({ ...o, score: scoreFish(o, region) }));

  const filteredByPerSpecies = perSpeciesFilter(scoredFish, limitations.perSpecies);
  const filteredByMaxSpecies = maxSpeciesFilter(filteredByPerSpecies, limitations.maxSpecies);
  const filteredByMaxFish = maxFishFilter(filteredByMaxSpecies, limitations.maxFish);

  return filteredByMaxFish.reduce((a, b) => a + b.score, 0);
}