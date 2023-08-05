import { Angler, Limitations, Region, ScoredFish } from "../Types/Types";
import { maxFishFilter, maxSpeciesFilter, perSpeciesFilter } from "./scoreFilters";
import { scoreFish } from "./scoreFish";

export function getAnglerScore(angler : Angler, limitations : Limitations, region:Region) : number {

    let fish : ScoredFish[] = angler.fish.map(o=>({...o, score:scoreFish(o,region)}));
    fish = perSpeciesFilter(fish, limitations.perSpecies);
    fish = maxSpeciesFilter(fish, limitations.maxSpecies);
    fish = maxFishFilter(fish, limitations.maxFish);

    return fish.reduce((a,b) => a+b.score, 0);
}

