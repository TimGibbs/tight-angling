import { Region } from "../Types/Region";

const RegionA : Region = {
        name : "Cornwall",
        letter : "A",
        values : [
            {fishType: "ANGLER FISH",boatLb: 21, boatKg: 9.525, shoreLb: 21, shoreKg: 9.525},
            {fishType: "BASS",boatLb: 6, boatKg: 2.721, shoreLb: 5.8, shoreKg: 2.495},
            {fishType: "BREAM - Black",boatLb: 2.4, boatKg: 10.2, shoreLb: 1.8, shoreKg: 0.68},
            {fishType: "BREAM - Gilthead",boatLb: 3, boatKg: 1.361, shoreLb: 2.8, shoreKg: 1.134},
            {fishType: "BREAM - Red",boatLb: 2, boatKg: 0.907, shoreLb: 1.4, shoreKg: 0.567},
            {fishType: "BRILL",boatLb: 3, boatKg: 1.361, shoreLb: 1.8, shoreKg: 0.68},
            {fishType: "BULL HUSS",boatLb: 10, boatKg: 4.535, shoreLb: 7, shoreKg: 3.175},
            {fishType: "CATFISH",boatLb: 5.4, boatKg: 2.381, shoreLb: 3, shoreKg: 1.361},
            {fishType: "CONGER EEL",boatLb: 35, boatKg: 15.876, shoreLb: 14, shoreKg: 6.35},
            {fishType: "COALFISH",boatLb: 6, boatKg: 2.721, shoreLb: 1.8, shoreKg: 0.68},
            {fishType: "COD",boatLb: 11, boatKg: 4.99, shoreLb: 5.8, shoreKg: 2.495},
            {fishType: "DAB",boatLb: 0.12, boatKg: 0.34, shoreLb: 0.12, shoreKg: 0.34},
            {fishType: "FLOUNDER",boatLb: 1.12, boatKg: 0.794, shoreLb: 1.8, shoreKg: 0.68},
            {fishType: "GARFISH",boatLb: 1.8, boatKg: 0.68, shoreLb: 1, shoreKg: 0.454},
            {fishType: "GURNARD - Red",boatLb: 1, boatKg: 0.454, shoreLb: 0.14, shoreKg: 0.397},
            {fishType: "GURNARD - Tub",boatLb: 2, boatKg: 0.907, shoreLb: 1.8, shoreKg: 680},
            {fishType: "HADDOCK",boatLb: 3.8, boatKg: 1.588, shoreLb: 1, shoreKg: 0.454},
            {fishType: "JOHN DORY",boatLb: 2.8, boatKg: 1.134, shoreLb: 1.8, shoreKg: 0.68},
            {fishType: "LESSER SPOTTED DOGFISH",boatLb: 2, boatKg: 0.907, shoreLb: 1.12, shoreKg: 0.794},
            {fishType: "LING",boatLb: 18, boatKg: 8.165, shoreLb: 4.4, shoreKg: 1.928},
            {fishType: "MACKEREL",boatLb: 1.4, boatKg: 0.567, shoreLb: 1, shoreKg: 0.454},
            {fishType: "MEGRIM",boatLb: 1.2, boatKg: 0.51, shoreLb: 0.14, shoreKg: 0.397},
            {fishType: "MONKFISH",boatLb: 25, boatKg: 11.34, shoreLb: 15, shoreKg: 6.804},
            {fishType: "MULLET - Golden Grey",boatLb: 1.4, boatKg: 0.567, shoreLb: 1.8, shoreKg: 0.68},
            {fishType: "MULLET - Red",boatLb: 1, boatKg: 0.454, shoreLb: 0.14, shoreKg: 0.397},
            {fishType: "MULLET - Thick Lipped",boatLb: 3, boatKg: 1.361, shoreLb: 3, shoreKg: 1.361},
            {fishType: "MULLET - Thin Lipped",boatLb: 1.8, boatKg: 0.68, shoreLb: 1.8, shoreKg: 0.68},
            {fishType: "PLAICE",boatLb: 1.12, boatKg: 0.794, shoreLb: 1.8, shoreKg: 0.68},
            {fishType: "POLLACK",boatLb: 9.12, boatKg: 4.422, shoreLb: 3.8, shoreKg: 1.588},
            {fishType: "POUTING",boatLb: 2.8, boatKg: 1.134, shoreLb: 1.4, shoreKg: 0.567},
            {fishType: "RAY - Blonde",boatLb: 13, boatKg: 5.897, shoreLb: 8.8, shoreKg: 3.856},
            {fishType: "RAY - Small Eyed/Painted",boatLb: 6.8, boatKg: 2.948, shoreLb: 6.8, shoreKg: 2.948},
            {fishType: "RAY - Spotted/Homelyn",boatLb: 3.8, boatKg: 1.588, shoreLb: 2.12, shoreKg: 1.247},
            {fishType: "RAY - Sting",boatLb: 17.8, boatKg: 7.938, shoreLb: 14, shoreKg: 6.35},
            {fishType: "RAY - Thornback",boatLb: 5.8, boatKg: 2.495, shoreLb: 6.4, shoreKg: 2.835},
            {fishType: "RAY - Undulate",boatLb: 10, boatKg: 4.535, shoreLb: 7, shoreKg: 3.175},
            {fishType: "ROCKLING - 3 Bearded",boatLb: 1, boatKg: 0.454, shoreLb: 1, shoreKg: 0.454},
            {fishType: "SCAD",boatLb: 0.14, boatKg: 0.397, shoreLb: 0.12, shoreKg: 0.34},
            {fishType: "SILVER EEL",boatLb: 1.12, boatKg: 0.794, shoreLb: 1.12, shoreKg: 0.794},
            {fishType: "SMOOTHHOUNDS - All",boatLb: 14, boatKg: 6.35, shoreLb: 6.8, shoreKg: 2.948},
            {fishType: "SOLE",boatLb: 1.12, boatKg: 0.794, shoreLb: 1.4, shoreKg: 0.567},
            {fishType: "SPURDOG",boatLb: 9.12, boatKg: 4.422, shoreLb: 5.8, shoreKg: 2.495},
            {fishType: "TOPE",boatLb: 20, boatKg: 9.072, shoreLb: 20, shoreKg: 9.072},
            {fishType: "TRIGGER FISH",boatLb: 2.8, boatKg: 1.134, shoreLb: 1.12, shoreKg: 0.794},
            {fishType: "TURBOT",boatLb: 5.8, boatKg: 2.495, shoreLb: 1.4, shoreKg: 0.567},
            {fishType: "WEEVER - Greater",boatLb: 1, boatKg: 0.454, shoreLb: 0.14, shoreKg: 0.397},
            {fishType: "WHITING",boatLb: 2.8, boatKg: 1.134, shoreLb: 1.4, shoreKg: 0.567},
            {fishType: "WRASSE - Ballan",boatLb: 3.8, boatKg: 1.588, shoreLb: 2, shoreKg: 0.907},
            {fishType: "WRASSE - Cuckoo",boatLb: 1, boatKg: 0.454, shoreLb: 0.12, shoreKg: 0.34}
        ]
}

export default RegionA;