import { Table } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import { scoreFish } from "../Functions/scoreFish";

const BestFish = () => {
  const [competition] = useCompetition();
  const bestFish = competition.anglers
    .flatMap((angler) =>
      angler.fish.map((fish) => ({
        ...fish,
        score: scoreFish(fish, competition.region),
      }))
    )
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return (
    <div style={{ paddingTop: "25px" }}>
        <h3>Best Fish</h3>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Fish</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
        {bestFish.map((fish, index) => (
        <tr key={"bestFish" + index}>
          <td>{fish.angler}</td>
          <td>{fish.fishType}</td>
          <td>{fish.score}</td>
        </tr>
      ))}
        </tbody>
      </Table>

    </div>
  );
};

export default BestFish;
