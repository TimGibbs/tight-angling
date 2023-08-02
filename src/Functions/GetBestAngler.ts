import { Angler, Fish, Region, Limitations } from "../Types/Types";
import { GetSpecimenScore } from "./GetSpecimenScore";

export default function GetBestAngler(anglers : Angler[], region : Region, limitations:Limitations) : { fish:Fish, score:number } {
const h = anglers.flatMap(o => o.Fish.map(f=> ({ fish: f, score: GetSpecimenScore(f, region)})) )
h.sort((a,b)=> a.score - b.score);
return h[0];
}