import { Regions } from "../Data/Regions";
import { Region } from "../Types/Types";

export default function useRegions() : Record<string, Region> {
    return Regions.reduce((a,b)=> {
        return {...a, [b.letter]:b}
    }, {})
}