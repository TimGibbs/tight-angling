import { ScoredFish } from "../Types/Types";
import { groupBy } from "./groupBy";

export function maxSpeciesFilter(fish: ScoredFish[], maxSpecies: number | null): ScoredFish[] {
    if (!maxSpecies)
        return fish;
    let ret: ScoredFish[] = [];
    const grouped = groupBy(fish, x => x.fishType);
    let scores: { key: string; value: number; }[] = [];
    for (const species in grouped) {
        scores.push({ key: species, value: grouped[species].reduce((a, b) => a + b.score, 0) });
    }
    scores = scores.sort((a, b) => b.value - a.value).slice(0, maxSpecies);
    scores.forEach(b => ret = [...ret, ...grouped[b.key]]);
    return ret.sort((a,b)=>{ const x = a.fishType.localeCompare(b.fishType)
    if(x===0) return b.score-a.score;
    return x});
}
