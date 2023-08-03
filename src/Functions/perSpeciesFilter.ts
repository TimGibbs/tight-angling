import { ScoredFish } from "../Types/Types";
import { groupBy } from "./groupBy";

export function perSpeciesFilter(fish: ScoredFish[], maxPerSpecies: number | null): ScoredFish[] {
    if (!maxPerSpecies)
        return fish;
    let ret: ScoredFish[] = [];
    const grouped = groupBy(fish, x => x.fishType);
    for (const species in grouped) {
        const x = grouped[species].sort((a, b) => b.score - a.score).slice(0, maxPerSpecies);
        ret = [...ret, ...x];
    }
    return ret;
}
