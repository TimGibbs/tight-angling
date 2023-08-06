import { Col, Row } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import { groupBy } from "../Functions/groupBy";
import { scoreFish } from "../Functions/scoreFish";
import { ScoredFish } from "../Types/Types";

const BestPerSpecies = () => {
  const [competition] = useCompetition();

  const fish = competition.anglers.flatMap((angler) =>
    angler.fish.map((fish) => ({ ...fish, score: scoreFish(fish, competition.region) }))
  );

  const grouped = groupBy(fish, (fish) => fish.fishType);

  const bestPerSpecies: ScoredFish[] = Object.values(grouped).map((speciesGroup) =>
    speciesGroup.sort((a, b) => b.score - a.score)[0]
  );

  const sortedBestPerSpecies = bestPerSpecies.sort((a, b) => a.fishType.localeCompare(b.fishType));

  return (
    <div style={{ padding: "25px" }}>
      <Row>
        <h3>Best Per Species</h3>
      </Row>
      <Row>
        <Col xs={3} style={{ fontWeight: "bold" }}>
          Name
        </Col>
        <Col xs={6} style={{ fontWeight: "bold" }}>
          Weight
        </Col>
        <Col xs={3} style={{ fontWeight: "bold" }}>
          Score
        </Col>
      </Row>
      {sortedBestPerSpecies.map((fish, index) => (
        <div key={"bestPerSpecies" + index}>
          <Row>
            <h6>{fish.fishType}</h6>
          </Row>
          <Row>
            <Col xs={3}>{fish.angler}</Col>
            <Col xs={6}>
              {fish.units === "Metric" ? `${fish.weightKg}kg` : `${fish.weightLb}lb ${fish.weightOz}oz`}
            </Col>
            <Col xs={3}>{fish.score}</Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default BestPerSpecies;
