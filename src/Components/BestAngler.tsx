import { Table } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import { getAnglerScore } from "../Functions/getAnglerScore";
import { orderByScoreThenCountDescending } from "../Functions/orderByScoreThenCountDescending";

const BestAngler = () => {
  const [competition] = useCompetition();

  const bestAngler = competition.anglers
    .map((angler) => ({
      score: getAnglerScore(angler, competition.limitations, competition.region),
      name: angler.name,
      count: angler.fish.length,
    }))
    .sort(orderByScoreThenCountDescending);

  return (
    <div style={{ paddingTop: "25px" }}>
        <h3>Best Angler</h3>
        <Table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Count</th>
            </tr>
          </thead>
          <tbody>
          {bestAngler.map((angler, index) => (
              <tr key={"bestAngler" + index}>
                <td>{angler.name}</td>
                <td>{angler.score}</td>
                <td>{angler.count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  );
};

export default BestAngler;
