import { Region } from "../Types/Region";
import { RegionValues } from "../Types/RegionValues";

const RegionB : Region = {
        name : "North Devon",
        letter : "B",
        values : [
            {fish: "ANGLER FISH",boatLb: 17, boatKg: 7.711, shoreLb: 14, shoreKg: 6.35},
            {fish: "BASS",boatLb: 6, boatKg: 2.721, shoreLb: 5.8, shoreKg: 2.495},
            {fish: "BREAM - Black",boatLb: 2.12, boatKg: 1.247, shoreLb: 1.8, shoreKg: 0.68},
            {fish: "BREAM - Gilthead",boatLb: 1.8, boatKg: 0.68, shoreLb: 1.8, shoreKg: 0.68},
            {fish: "BREAM - Red",boatLb: 2, boatKg: 0.907, shoreLb: 0.12, shoreKg: 0.34},
            {fish: "BRILL",boatLb: 3.4, boatKg: 1.474, shoreLb: 2, shoreKg: 0.907},
            {fish: "BULL HUSS",boatLb: 10, boatKg: 4.535, shoreLb: 7, shoreKg: 3.175},
            {fish: "CATFISH",boatLb: 3.8, boatKg: 1.588, shoreLb: 3, shoreKg: 1.361},
            {fish: "CONGER EEL",boatLb: 30, boatKg: 13.607, shoreLb: 14, shoreKg: 6.35},
            {fish: "COALFISH",boatLb: 10, boatKg: 4.535, shoreLb: 2.8, shoreKg: 1.134},
            {fish: "COD",boatLb: 12.8, boatKg: 5.67, shoreLb: 8.8, shoreKg: 3.856},
            {fish: "DAB",boatLb: 1, boatKg: 0.454, shoreLb: 0.12, shoreKg: 0.34},
            {fish: "FLOUNDER",boatLb: 1.8, boatKg: 0.68, shoreLb: 1.8, shoreKg: 0.68},
            {fish: "GARFISH",boatLb: 1, boatKg: 0.454, shoreLb: 1, shoreKg: 0.454},
            {fish: "GURNARD - Red",boatLb: 0.14, boatKg: 0.397, shoreLb: 0.12, shoreKg: 0.34},
            {fish: "GURNARD - Tub",boatLb: 3, boatKg: 1.361, shoreLb: 1.12, shoreKg: 0.794},
            {fish: "HADDOCK",boatLb: 3, boatKg: 1.361, shoreLb: 0.12, shoreKg: 0.34},
            {fish: "JOHN DORY",boatLb: 3, boatKg: 1.361, shoreLb: 0.12, shoreKg: 0.34},
            {fish: "LESSER SPOTTED DOGFISH",boatLb: 2, boatKg: 0.907, shoreLb: 1.12, shoreKg: 0.794},
            {fish: "LING",boatLb: 17.8, boatKg: 7.938, shoreLb: 3.8, shoreKg: 1.588},
            {fish: "MACKEREL",boatLb: 1.4, boatKg: 0.567, shoreLb: 1, shoreKg: 0.454},
            {fish: "MEGRIM",boatLb: 0.14, boatKg: 0.397, shoreLb: 0.12, shoreKg: 0.34},
            {fish: "MONKFISH",boatLb: 25, boatKg: 11.34, shoreLb: 17.8, shoreKg: 7.938},
            {fish: "MULLET - Golden Grey",boatLb: 1, boatKg: 0.454, shoreLb: 1, shoreKg: 0.454},
            {fish: "MULLET - Red",boatLb: 1, boatKg: 0.454, shoreLb: 0.14, shoreKg: 0.397},
            {fish: "MULLET - Thick Lipped",boatLb: 3, boatKg: 1.361, shoreLb: 3, shoreKg: 1.361},
            {fish: "MULLET - Thin Lipped",boatLb: 2.8, boatKg: 1.134, shoreLb: 2.8, shoreKg: 1.134},
            {fish: "PLAICE",boatLb: 2.8, boatKg: 1.134, shoreLb: 1.12, shoreKg: 0.794},
            {fish: "POLLACK",boatLb: 11, boatKg: 4.99, shoreLb: 3, shoreKg: 1.361},
            {fish: "POUTING",boatLb: 2, boatKg: 0.907, shoreLb: 1, shoreKg: 0.454},
            {fish: "RAY - Blonde",boatLb: 14, boatKg: 6.35, shoreLb: 9, shoreKg: 4.082},
            {fish: "RAY - Small Eyed/Painted",boatLb: 7.8, boatKg: 3.402, shoreLb: 6.8, shoreKg: 2.948},
            {fish: "RAY - Spotted/Homelyn",boatLb: 3.12, boatKg: 1.701, shoreLb: 3, shoreKg: 1.361},
            {fish: "RAY - Sting",boatLb: 12.8, boatKg: 5.67, shoreLb: 14, shoreKg: 6.35},
            {fish: "RAY - Thornback",boatLb: 9, boatKg: 4.082, shoreLb: 5.8, shoreKg: 2.495},
            {fish: "RAY - Undulate",boatLb: 10, boatKg: 4.535, shoreLb: 8, shoreKg: 3.628},
            {fish: "ROCKLING - 3 Bearded",boatLb: 1.4, boatKg: 0.567, shoreLb: 1.4, shoreKg: 0.567},
            {fish: "SCAD",boatLb: 1, boatKg: 0.454, shoreLb: 0.14, shoreKg: 0.397},
            {fish: "SILVER EEL",boatLb: 1.12, boatKg: 0.794, shoreLb: 1.12, shoreKg: 0.794},
            {fish: "SMOOTHHOUNDS - All",boatLb: 10, boatKg: 4.535, shoreLb: 7.8, shoreKg: 3.405},
            {fish: "SOLE",boatLb: 1.4, boatKg: 0.567, shoreLb: 1.4, shoreKg: 0.567},
            {fish: "SPURDOG",boatLb: 9.8, boatKg: 4.308, shoreLb: 5.8, shoreKg: 2.495},
            {fish: "TOPE",boatLb: 30, boatKg: 13.607, shoreLb: 20, shoreKg: 9.072},
            {fish: "TRIGGER FISH",boatLb: 2.8, boatKg: 1.134, shoreLb: 1.12, shoreKg: 0.794},
            {fish: "TURBOT",boatLb: 10, boatKg: 4.535, shoreLb: 1.8, shoreKg: 0.68},
            {fish: "WEEVER - Greater",boatLb: 0.12, boatKg: 0.34, shoreLb: 0.12, shoreKg: 0.34},
            {fish: "WHITING",boatLb: 2, boatKg: 0.907, shoreLb: 1, shoreKg: 0.454},
            {fish: "WRASSE - Ballan",boatLb: 3.8, boatKg: 1.588, shoreLb: 3, shoreKg: 1.361},
            {fish: "WRASSE - Cuckoo",boatLb: 0.14, boatKg: 0.397, shoreLb: 0.14, shoreKg: 0.397}
        ]
}

export default RegionB;