import { Angler, Limitations, Region } from "./Types";

export type Competition  = {
    name : string
    region : Region
    isShore : boolean
    limitations : Limitations
    anglers : Angler[]
 };