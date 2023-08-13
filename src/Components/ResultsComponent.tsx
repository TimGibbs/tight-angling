import { Container } from "react-bootstrap";
import BestAngler from "./BestAngler";
import BestFish from "./BestFish";
import BestPerSpecies from "./BestPerSpecies";

import './ResultsComponent.css'

const ResultsComponent = () => {
  return (
    <Container className="resultsComponent">
      <BestAngler />
      <BestFish />
      <BestPerSpecies />
    </Container>
  );
};

export default ResultsComponent;