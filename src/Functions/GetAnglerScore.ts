import { Angler, Limitations } from "../Types/Types";
import { maxFishFilter, maxSpeciesFilter, perSpeciesFilter } from "./scoreFilters";

export function getAnglerScore(angler : Angler, limitations : Limitations) : number {

    let fish = angler.fish;
    fish = perSpeciesFilter(fish, limitations.perSpecies);
    fish = maxSpeciesFilter(fish, limitations.maxSpecies);
    fish = maxFishFilter(fish, limitations.maxFish);

    return fish.reduce((a,b) => a+b.score, 0);
}

