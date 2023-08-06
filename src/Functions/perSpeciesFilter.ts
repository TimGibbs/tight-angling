import { ScoredFish } from "../Types/Types";
import { groupBy } from "./groupBy";

export function perSpeciesFilter(fish: ScoredFish[], maxPerSpecies: number | null): ScoredFish[] {
  if (!maxPerSpecies) {
    return fish;
  }

  const grouped = groupBy(fish, (x) => x.fishType);

  const ret = Object.values(grouped).flatMap((speciesGroup) =>
    speciesGroup.sort((a, b) => b.score - a.score).slice(0, maxPerSpecies)
  );

  return ret.sort((a, b) => a.fishType.localeCompare(b.fishType));
}
