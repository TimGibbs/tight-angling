import { Region } from "../Types/Region";
import { RegionValues } from "../Types/RegionValues";

const RegionC : Region = {
        name : "South Devon",
        letter : "C",
        values : [
            {fishType: "BASS",boatLb: 6, boatKg: 2.721, shoreLb: 5.8, shoreKg: 2.495},
            {fishType: "BREAM - Black",boatLb: 2.8, boatKg: 1.134, shoreLb: 1.12, shoreKg: 0.794},
            {fishType: "BREAM - Gilthead",boatLb: 3.8, boatKg: 1.588, shoreLb: 3.4, shoreKg: 1.474},
            {fishType: "BREAM - Red",boatLb: 2.8, boatKg: 1.134, shoreLb: 0.12, shoreKg: 0.34},
            {fishType: "BRILL",boatLb: 3.8, boatKg: 1.588, shoreLb: 1.8, shoreKg: 0.68},
            {fishType: "BULL HUSS",boatLb: 9.5, boatKg: 4.313, shoreLb: 8, shoreKg: 3.629},
            {fishType: "CATFISH",boatLb: 3.8, boatKg: 1.588, shoreLb: 3, shoreKg: 1.361},
            {fishType: "CONGER EEL",boatLb: 35, boatKg: 15.875, shoreLb: 12.8, shoreKg: 5.67},
            {fishType: "COALFISH",boatLb: 10, boatKg: 4.535, shoreLb: 1.12, shoreKg: 0.794},
            {fishType: "COD",boatLb: 14, boatKg: 6.35, shoreLb: 5.8, shoreKg: 2.495},
            {fishType: "DAB",boatLb: 0.14, boatKg: 0.397, shoreLb: 0.12, shoreKg: 0.34},
            {fishType: "FLOUNDER",boatLb: 1.12, boatKg: 0.794, shoreLb: 2, shoreKg: 0.907},
            {fishType: "GARFISH",boatLb: 1, boatKg: 0.454, shoreLb: 1, shoreKg: 0.454},
            {fishType: "GURNARD - Red",boatLb: 0.14, boatKg: 0.397, shoreLb: 0.12, shoreKg: 0.34},
            {fishType: "GURNARD - Tub",boatLb: 2.8, boatKg: 0.134, shoreLb: 1.12, shoreKg: 0.794},
            {fishType: "HADDOCK",boatLb: 3.12, boatKg: 1.701, shoreLb: 0.12, shoreKg: 0.34},
            {fishType: "JOHN DORY",boatLb: 3.4, boatKg: 1.474, shoreLb: 0.12, shoreKg: 0.34},
            {fishType: "LESSER SPOTTED DOGFISH",boatLb: 2, boatKg: 0.907, shoreLb: 2, shoreKg: 0.907},
            {fishType: "LING",boatLb: 14, boatKg: 6.35, shoreLb: 3.4, shoreKg: 1.474},
            {fishType: "MACKEREL",boatLb: 1.8, boatKg: 0.68, shoreLb: 1, shoreKg: 0.454},
            {fishType: "MEGRIM",boatLb: 0.14, boatKg: 0.397, shoreLb: 0.12, shoreKg: 0.34},
            {fishType: "MONKFISH",boatLb: 25, boatKg: 11.34, shoreLb: 17.8, shoreKg: 7.938},
            {fishType: "MULLET - Golden Grey",boatLb: 1.8, boatKg: 0.68, shoreLb: 1.8, shoreKg: 0.68},
            {fishType: "MULLET - Red",boatLb: 1, boatKg: 0.454, shoreLb: 0.14, shoreKg: 0.397},
            {fishType: "MULLET - Thick Lipped",boatLb: 3, boatKg: 1.361, shoreLb: 3.4, shoreKg: 1.474},
            {fishType: "MULLET - Thin Lipped",boatLb: 2.8, boatKg: 1.134, shoreLb: 2.8, shoreKg: 1.134},
            {fishType: "PLAICE",boatLb: 3, boatKg: 1.361, shoreLb: 1.12, shoreKg: 0.794},
            {fishType: "POLLACK",boatLb: 11, boatKg: 4.99, shoreLb: 2.8, shoreKg: 1.134},
            {fishType: "POUTING",boatLb: 2, boatKg: 0.907, shoreLb: 1.8, shoreKg: 0.68},
            {fishType: "RAY - Blonde",boatLb: 17.8, boatKg: 7.945, shoreLb: 9, shoreKg: 4.082},
            {fishType: "RAY - Small Eyed/Painted",boatLb: 8.8, boatKg: 3.856, shoreLb: 6.8, shoreKg: 2.948},
            {fishType: "RAY - Spotted/Homelyn",boatLb: 3.12, boatKg: 1.701, shoreLb: 3, shoreKg: 1.361},
            {fishType: "RAY - Sting",boatLb: 18, boatKg: 8.165, shoreLb: 14, shoreKg: 6.35},
            {fishType: "RAY - Thornback",boatLb: 9, boatKg: 4.082, shoreLb: 7, shoreKg: 3.175},
            {fishType: "RAY - Undulate",boatLb: 10, boatKg: 4.535, shoreLb: 8, shoreKg: 3.628},
            {fishType: "ROCKLING - 3 Bearded",boatLb: 1, boatKg: 0.454, shoreLb: 1, shoreKg: 0.454},
            {fishType: "SCAD",boatLb: 0.14, boatKg: 0.397, shoreLb: 0.12, shoreKg: 0.34},
            {fishType: "SILVER EEL",boatLb: 1.12, boatKg: 0.794, shoreLb: 1.12, shoreKg: 0.794},
            {fishType: "SMOOTHHOUNDS - All",boatLb: 10, boatKg: 4.535, shoreLb: 5.8, shoreKg: 2.495},
            {fishType: "SOLE",boatLb: 1, boatKg: 0.454, shoreLb: 1.4, shoreKg: 0.567},
            {fishType: "SPURDOG",boatLb: 9.8, boatKg: 4.308, shoreLb: 7, shoreKg: 3.175},
            {fishType: "TOPE",boatLb: 25, boatKg: 11.34, shoreLb: 18, shoreKg: 8.165},
            {fishType: "TRIGGER FISH",boatLb: 2, boatKg: 0.907, shoreLb: 1.12, shoreKg: 0.794},
            {fishType: "TURBOT",boatLb: 10, boatKg: 4.535, shoreLb: 2, shoreKg: 0.907},
            {fishType: "WEEVER - Greater",boatLb: 0.8, boatKg: 0.227, shoreLb: 0.8, shoreKg: 0.227},
            {fishType: "WHITING",boatLb: 2.4, boatKg: 1.02, shoreLb: 1, shoreKg: 0.454},
            {fishType: "WRASSE - Ballan",boatLb: 3.8, boatKg: 1.588, shoreLb: 3, shoreKg: 1.361},
            {fishType: "WRASSE - Cuckoo",boatLb: 0.14, boatKg: 0.397, shoreLb: 0.14, shoreKg: 0.397}
        ]
}

export default RegionC;