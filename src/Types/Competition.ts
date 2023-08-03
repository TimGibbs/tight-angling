import { Angler, Limitations, Region } from "./Types";

export type Competition  = {
    name : string
    region : Region
    limitations : Limitations
    anglers : Angler[]
 };