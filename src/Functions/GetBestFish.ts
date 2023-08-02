import { Angler, Fish, Region } from "../Types/Types";
import { GetSpecimenValue as GetSpecimenScore } from "./GetSpecimenScore";

export default function BestFish(anglers : Angler[], region : Region) : { fish:Fish, score:number } {
const h = anglers.flatMap(o => o.Fish.map(f=> ({ fish: f, score: GetSpecimenScore(f, region)})) )
h.sort((a,b)=> a.score - b.score);
return h[0];
}