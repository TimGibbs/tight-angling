import { Container } from "react-bootstrap";
import BestAngler from "./BestAngler";
import BestFish from "./BestFish";
import BestPerSpecies from "./BestPerSpecies";

const ResultsComponent = () => {
  return (
    <Container>
      <BestAngler />
      <BestFish />
      <BestPerSpecies />
    </Container>
  );
};

export default ResultsComponent;