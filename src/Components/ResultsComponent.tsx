import { Container } from "react-bootstrap";
import BestAngler from "./BestAngler";
import BestFish from "./BestFish";
import { BestPerSpecies } from "./BestPerSpecies";

export const ResultsComponent = () => {

    return <Container>
                <BestAngler />
                <BestFish/>
                <BestPerSpecies/>
    </Container>
} 


