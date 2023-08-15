import React from "react";
import { Table } from "react-bootstrap";
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
    <div className="resultObject">
      <h3>Best Per Species</h3>
      <Table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Weight</th>
          <th>Score</th>
          </tr>
        </thead>
        <tbody>
        {sortedBestPerSpecies.map((fish, index) => (
          <React.Fragment key={'BestInSpecies' +index}>
            <tr>
              <th colSpan={3} >{fish.fishType}</th>
            </tr>
            <tr >
              <td>{fish.angler}</td>
              <td>{fish.units === "Metric" ? `${fish.weightKg}kg` : `${fish.weightLb}lb ${fish.weightOz}oz`}</td>
              <td>{fish.score}</td>
            </tr>
          </React.Fragment>
      ))}
        </tbody>
      </Table>
      
    </div>
  );
};

export default BestPerSpecies;
