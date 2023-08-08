import { Button, Col, Row } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import { scoreFish } from "../Functions/scoreFish";
import DeleteIcon from "../Images/delete";
import { Fish } from "../Types/Types";

interface FishComponentProps {
  fish: Fish;
}

const FishComponent: React.FC<FishComponentProps> = ({ fish }) => {
  const [competition, setCompetition] = useCompetition();
  const score = scoreFish(fish, competition.region);

    const deleteFish = () =>{
        const updatedCompetition = { ...competition };
        const angler = updatedCompetition.anglers.find((o) => o.name === fish.angler);
        if (angler) {
            angler.fish = angler.fish.filter(f=>f!==fish);
        }
        setCompetition(updatedCompetition);
    }

  return (
    <Row>
      <Col xs={5} style={{ textAlign: "left" }}>
        {fish.fishType}
      </Col>
      {fish.units === "Metric" ? (
        <Col xs={4}>{fish.weightKg}kg</Col>
      ) : (
        <Col xs={4}>{fish.weightLb}lb {fish.weightOz}oz</Col>
      )}
      <Col xs={2}>{score}</Col>
      <Col xs={1}>
      <Button variant="danger" 
            onClick={deleteFish}
            style={{padding:"2px"}}><DeleteIcon/></Button>
      </Col>
    </Row>
  );
};

export default FishComponent;
